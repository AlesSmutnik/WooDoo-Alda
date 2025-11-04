"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import "../styles/calculator.css"

const priceList = {
    stůl: 500,    
    bedsideTable: 350,
    chars: 200,
    wardrobe: 1200,
    desk: 800,
    shoeCabinet: 600,
    smallWardrobe: 1000,
    largeWardrobe: 1500,
    bigWardrobe: 2000,
    kitchen: 3000,  
    bed: 1000,
    doubleBed: 1600,
    kitchenSet: 8000,   
    bigWardrobeWithMirror: 2500,
    bigWardrobeWithMirrorAndLight: 3000,
    bigWardrobeWithLight: 2800,
   
 
};
const displayNames = {
    stůl: 'Stůl',   
    bedsideTable: 'Noční stolek',
    chars: 'Židle',
    wardrobe: 'Skříň',
    desk: 'Psací stůl',
    shoeCabinet: 'Botník',
    smallWardrobe: 'Malá skříň',
    largeWardrobe: 'Velká skříň',
    bigWardrobe: 'Velká skříň',
    kitchen: 'Kuchyňská linka 160cm orientačně',
    bed: 'Postel',
    doubleBed: 'Manželská postel',
    kitchenSet: 'Kuchyňská sestava',
    bigWardrobeWithMirror: 'Velká skříň s zrcadlem',    
    bigWardrobeWithLight: 'Velká skříň s osvětlením',
    bigWardrobeWithMirrorAndLight: 'Velká skříň se zrcadlem a osvětlením',
    
};
interface Item {
    id: number;
    selectedItem: string;
    quantity: number;
}

const CalculatorPage: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, selectedItem: '', quantity: 1 },
    ]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let total = 0;
        for (const item of items) {
            if (!item.selectedItem) {
                setError('Vyberte všechny položky.');
                setTotalPrice(0);
                return;
            }
            if (item.quantity <= 0) {
                setError('Počet kusů musí být větší než 0.');
                setTotalPrice(0);
                return;
            }
            const price = priceList[item.selectedItem as keyof typeof priceList];
            total += price * item.quantity;
        }
        setError(null);
        setTotalPrice(total);
    }, [items]);

    const handleAddItem = () => {
        setItems((prevItems) => [
            ...prevItems,
            { id: prevItems.length + 1, selectedItem: '', quantity: 1 },
        ]);
    };

    const handleItemChange = (id: number, field: keyof Item, value: string | number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    return (
        <div className="border-box text-white p-1 m-10 flex flex-col items-center border-t border-b shadow-lg">
            <h1 className="text-[#fff] text-center mb-4 text-xl font-bold text-shadow-lg/30">Kalkulace ceny montáže </h1>
            {items.map((item) => (
                <div key={item.id} className="text-[#7cec10] flex flex-col items-start w-max mb-4 mx-5 px-5 ">
                    <label className="">
                        Vyberte typ nábytku
                        <select
                            value={item.selectedItem}
                            onChange={(e) =>
                                handleItemChange(item.id, 'selectedItem', e.target.value)
                            }
                            className="flex flex-culumn text-white w-40 mt-2 mb-2 border border-white rounded shadow-lg bg-[#606060]/80 px-2 py-1"
                        >
                            <option value="">-- Vyberte --</option>
                            {Object.keys(priceList).map((key) => (
                                <option className="bg-[#606060]/80 shadow-lg" key={key} value={key}>
                                    {displayNames[key as keyof typeof displayNames]}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="">
                        Počet kusů:
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                                handleItemChange(item.id, 'quantity', Number(e.target.value))
                            }
                            min="1"
                            className="mb-5 ml-2 w-16 text-center rounded-lg shadow-lg"
                        />
                    </label>
                    
                </div>
            ))}
            <button
                onClick={handleAddItem}
                className="p-1 mx-10 mb-5 border border-white text-[#7cec10] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100"
            >
                Přidat další položku
            </button>
            {error && <div className="mb-5">{error}</div>}
            {!error && (
                <div className="mb-5 mx-10 p-2 w-max" >
                    <h2>Celková cena: {totalPrice} Kč</h2>
                </div>
            )}
            <button className='mb-10 mx-10 p-1 border border-white text-[#7cec10] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100'>
                <Link href="/kontakt" className="">
                    Odeslat poptávku
                </Link>
            </button>
          </div>
    );
};

export default CalculatorPage;

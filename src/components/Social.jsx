import React from 'react'

import { socialLinks } from './../constants';


const Social = () => {
    return (
        <div className={`flex justify-center items-center gap-2`}>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={link.iconUrl} alt={link.name} className="w-10 h-10 object-contain cursor-pointer" />
                </a>
            ))}
        </div>
    );
};

export default Social
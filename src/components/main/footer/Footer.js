import React from 'react';
import {DateTime} from 'luxon';
import {version} from '../../../../package.json';

const Footer = () => {

    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>footer</b>
                <b> </b>
                <span>{version}</span>
            </div>
            <strong>
                <span>Copyright © {DateTime.now().toFormat('y')} </span>
                <a
                    href="https://adminlte.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Control WEATHER	
                </a>
                <span>.</span>
            </strong>
            <span> </span>
            <span>copyright</span>
        </footer>
    );
};

export default Footer;

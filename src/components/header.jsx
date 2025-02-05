import { HEADER_STYLES, HEADER_TITLE, HEADER_LOGO } from '../styles/header.js';
import { AppBar, Toolbar, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import React from 'react';

export function HeadContent() {
    return (
        <>
            <AppBar sx={HEADER_STYLES}>
                <Toolbar>
                    <StorageIcon sx={HEADER_LOGO} />
                    <Typography sx={HEADER_TITLE} variant='h1' component="div">DataBase Guide Normalitation</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
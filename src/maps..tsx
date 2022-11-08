import React from 'react';
import OpenYandex from './yandex';
import OpenGoogle from './google';

function OpenAllMaps () {
    return (
        <div>
            <OpenGoogle/>
            <OpenYandex/>
        </div>
    )
}

export default OpenAllMaps;
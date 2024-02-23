import React from 'react'

function div ( {marginTop, marginLeft, children}) {
    const styles = {
        marginTop : marginTop,
        marginLeft : marginLeft,
    }

    return <div styles={styles}>{children}</div>
}

export default div;
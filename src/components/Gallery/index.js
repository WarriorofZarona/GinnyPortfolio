import React from 'react';

function Gallery(props) {

    const rows = props.rows;

    return (
        <Container>
            {!props.gallery ? <h1>Nothing here!</h1> :
                rows.map(row => (
                    <Row id>
                        {row.map(col => (<Col key={col.id}><img src={col.thumbnail} /></Col>))}
                    </Row>
                ))
            }
        </Container>
    )
}
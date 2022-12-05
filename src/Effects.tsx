import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }): any {
    const [message, setMessage] = useState(-1);
    const updateMessage = (message: any) => {
        setMessage(message);
    };

    useEffect(() => {
        setMessage(-1);
        subscribe(props.sourceId, updateMessage);
        return () => unsubscribe(props.sourceId, updateMessage);
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}

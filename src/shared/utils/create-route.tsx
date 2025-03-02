import { FC, PropsWithChildren } from 'react';

export const createRoute = ({ Root, Screen }: { Root?: FC<PropsWithChildren>; Screen: FC<PropsWithChildren> }) => {
    if (Root) {
        const Route = () => (
            <Root>
                <Screen />
            </Root>
        );

        return Route;
    }

    return Screen;
};

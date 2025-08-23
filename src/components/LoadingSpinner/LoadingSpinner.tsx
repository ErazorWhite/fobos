import {CenteredMutatingDots, LoaderContainer} from "./LoadingSpinner.styled";
import type {FC} from "react";
import {Backdrop} from "_/components/Backdrop";
import ReactDOM from "react-dom";

const Loader = () => (
    <CenteredMutatingDots
        height="100"
        width="100"
        color="#635FC7"
        secondaryColor="#A8A4FF"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
);

interface ILoadingSpinnerProps {
    isLoading: boolean;
}

export const LoadingSpinner: FC<ILoadingSpinnerProps> = ({isLoading}) => {
    const portalRoot = document.getElementById('loading-root');
    if (!portalRoot) return null;

    return (
        isLoading &&
        ReactDOM.createPortal(
            <Backdrop>
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
            </Backdrop>,
            portalRoot
        )
    );
};
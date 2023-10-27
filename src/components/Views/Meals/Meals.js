import React from "react";
import Breadcrumb from "../../UI/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../../UI/Breadcrumb/BreadcrumbItem";
import Pagination from "../../UI/Pagination/Pagination";
import PageItem from "../../UI/Pagination/PageItem";
import PageArrow from "../../UI/Pagination/PageArrow";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AvailableMeals from './AvailableMeals';
import './Meals.css';

const Meals = () => {
    return(
        <div className="container-fluid px-3 px-md-4 py-3">
            <Breadcrumb ariaLabel="breadcrumb">
                <BreadcrumbItem href="#">Home</BreadcrumbItem>
                <BreadcrumbItem className="active" ariaCurrent="page">Meals</BreadcrumbItem>
            </Breadcrumb>
            <AvailableMeals />
            <Pagination ariaLabel="Page navigation example" className="gap-3 align-items-center justify-content-center">
                <PageArrow className="p-0 bg-transparent border-0 shadow-none">
                    <ArrowBackIosIcon className="fs-lg" />
                </PageArrow>
                <PageItem className="p-0 bg-transparent border-0 shadow-none">1</PageItem>
                <PageItem className="p-0 bg-transparent border-0 shadow-none">2</PageItem>
                <PageItem className="p-0 bg-transparent border-0 shadow-none">3</PageItem>
                <PageArrow className="p-0 bg-transparent border-0 shadow-none">
                    <ArrowForwardIosIcon className="fs-lg" />
                </PageArrow>
            </Pagination>
        </div>
    );
}
export default Meals;
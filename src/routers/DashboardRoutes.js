import React from 'react'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { Navbar } from '../components/ui/Navbar'
import { HeroScreen } from '../components/heroes/HeroScreen'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen} />
                    <Route exact path="/dc" component={ DcScreen} />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

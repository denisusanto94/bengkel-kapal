<template>
    <div>
        <b-container fluid class="sidebar">
            <ul style="list-style-type: none;">
                <li><i class="fa fa-tachometer" aria-hidden="true"></i><router-link to="/dashboard" style="color: inherit; text-decoration: none;">Dashboard</router-link></li>
                <li><i class="fa fa-ship" aria-hidden="true"></i><router-link to="/tugboat" style="color: inherit; text-decoration: none;">Tugboat</router-link></li>
                <li><i class="fa fa-cog" aria-hidden="true"></i><router-link to="/spare-parts" style="color: inherit; text-decoration: none;">Spare-parts</router-link></li>
            </ul>
        </b-container>
    </div>
</template>
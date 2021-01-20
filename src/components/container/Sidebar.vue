<template>
    <div>
        <b-container fluid class="sidebar">
            <div class="sidebar-item">
                <table>
                    <tr>
                        <td align="center"><i class="fa fa-tachometer" aria-hidden="true"></i></td>
                        <td><router-link to="/dashboard" style="color: inherit; text-decoration: none;">Dashboard</router-link></td>
                    </tr>
                    <tr>
                        <td align="center"><i class="fa fa-ship" aria-hidden="true"></i></td>
                        <td><router-link to="/tugboat" style="color: inherit; text-decoration: none;">Tugboat</router-link></td>
                    </tr>
                    <tr>
                        <td align="center"><i class="fa fa-cog" aria-hidden="true"></i></td>
                        <td><router-link to="/spare-parts" style="color: inherit; text-decoration: none;">Spare-parts</router-link></td>
                    </tr>
                </table>
            </div>
        </b-container>
    </div>
</template>
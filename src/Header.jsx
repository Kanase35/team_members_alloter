const Header = ({ selectedTeam, teamMemberCount }) => {
    return (
        <header className="container">

            <div className=" row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <h1>Team Member Allocation</h1>

                    <h3>{selectedTeam} has <b className="text-danger">{teamMemberCount}</b> {teamMemberCount === 1 || teamMemberCount === 0?"member":"members"}</h3>
                </div>
            </div>

        </header>
    )
}
export default Header
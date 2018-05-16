create table users (
	id				serial not null,
    username		varchar(20) not null unique,
    password		varchar(40) not null,
    --GENERAL INFORMATION
    name			varchar(40),
    last_name		varchar(40),
    email			varchar(50),
    phone			varchar(14),
    primary key (id)
);
create table clients (
	id				serial not null,
    score			integer not null default 0,
    comment			varchar(200),
    --GENERAL INFORMATION
    name			varchar(40),
    last_name		varchar(40),
    email			varchar(50),
    phone			varchar(14),
    primary key (id)
);
create table providers (
	id				serial not null,
    ocupation		varchar(40) not null,
    comment			varchar(200),
    --GENERAL INFORMATION
    name			varchar(40),
    last_name		varchar(40),
    email			varchar(50),
    phone			varchar(14),
    primary key (id)
);

create table pending (
	id				serial not null,
    date			timestamp,
    targetDay		timestamp,
    status			boolean,
    name			varchar(40),
    last_name		varchar(40),
    email			varchar(50),
    phone			varchar(14),
    primary key (id)
);
create table events (
	id				serial not null,
    client			varchar(80) not null,
    dateStart		timestamp not null,
    dateEnd			timestamp not null,
    persons			int not null,
    primary key (id)
);
create table eventsPackages (
    event_id		int,
    package_id		int
);
create table packages (
	id				serial not null,
    name			varchar(40) not null,
    description		varchar(200),
    primary key (id)
);
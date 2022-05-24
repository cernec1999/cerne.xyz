import {Card, Typography, Stack, Link as MuiLink} from '@mui/material';
import {red} from '@mui/material/colors';
import React from 'react';

import Head from 'next/head';
import {SiteTitle} from '../src/Config';

export default function Contact() {
  const myEmail = 'contact' + '@' + 'ccerne.com';
  return (
    <div>
      <Head>
        <title>{SiteTitle} | Contact</title>
      </Head>

      <Stack spacing={2}>
        <Typography variant="h4">Contact</Typography>
        <Card sx={{p: 2, borderRadius: 2, boxShadow: 4}}>
          <Stack spacing={1}>
            <Typography variant="body1">
              The best way to contact me is to send me an email. My email
              address is {myEmail}.
            </Typography>

            <Typography variant="body1">
              PGP public key: &nbsp;
              <MuiLink
                href="/assets/pgp/ccerne.com.asc"
                sx={{textDecoration: 'none'}}
              >
                ccerne.com.asc
              </MuiLink>
            </Typography>

            <Typography variant="body1">
              PGP fingerprint:&nbsp;
              <Typography
                component="span"
                fontFamily="Monospace"
                color={red[500]}
                display="inline"
                sx={{overflowWrap: 'break-word'}}
              >
                459f4ef4ec05e21c88218805b866cd2e644f1736
              </Typography>
            </Typography>
          </Stack>
        </Card>
      </Stack>
    </div>
  );
}

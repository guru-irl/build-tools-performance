import React from 'react';
const LABEL_33230 = 'component_33230';
export function Component33230({ value = 33230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33230, 'data-value': derived.doubled }, children);
}
export default Component33230;

import React from 'react';
const LABEL_12074 = 'component_12074';
export function Component12074({ value = 12074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12074, 'data-value': derived.doubled }, children);
}
export default Component12074;

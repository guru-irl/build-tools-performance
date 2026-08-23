import React from 'react';
const LABEL_35630 = 'component_35630';
export function Component35630({ value = 35630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35630, 'data-value': derived.doubled }, children);
}
export default Component35630;

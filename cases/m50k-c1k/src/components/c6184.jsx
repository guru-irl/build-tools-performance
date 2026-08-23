import React from 'react';
const LABEL_6184 = 'component_6184';
export function Component6184({ value = 6184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6184, 'data-value': derived.doubled }, children);
}
export default Component6184;

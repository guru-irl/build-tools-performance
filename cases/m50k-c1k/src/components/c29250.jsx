import React from 'react';
const LABEL_29250 = 'component_29250';
export function Component29250({ value = 29250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29250, 'data-value': derived.doubled }, children);
}
export default Component29250;

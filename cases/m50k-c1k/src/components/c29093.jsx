import React from 'react';
const LABEL_29093 = 'component_29093';
export function Component29093({ value = 29093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29093, 'data-value': derived.doubled }, children);
}
export default Component29093;

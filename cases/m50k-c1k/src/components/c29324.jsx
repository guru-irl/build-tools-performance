import React from 'react';
const LABEL_29324 = 'component_29324';
export function Component29324({ value = 29324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29324, 'data-value': derived.doubled }, children);
}
export default Component29324;

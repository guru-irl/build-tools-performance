import React from 'react';
const LABEL_29590 = 'component_29590';
export function Component29590({ value = 29590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29590, 'data-value': derived.doubled }, children);
}
export default Component29590;

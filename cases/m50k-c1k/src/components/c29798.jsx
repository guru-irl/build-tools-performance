import React from 'react';
const LABEL_29798 = 'component_29798';
export function Component29798({ value = 29798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29798, 'data-value': derived.doubled }, children);
}
export default Component29798;

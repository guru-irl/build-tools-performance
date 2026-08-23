import React from 'react';
const LABEL_21071 = 'component_21071';
export function Component21071({ value = 21071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21071, 'data-value': derived.doubled }, children);
}
export default Component21071;

import React from 'react';
const LABEL_36790 = 'component_36790';
export function Component36790({ value = 36790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36790, 'data-value': derived.doubled }, children);
}
export default Component36790;

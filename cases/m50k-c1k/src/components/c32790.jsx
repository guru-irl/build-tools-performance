import React from 'react';
const LABEL_32790 = 'component_32790';
export function Component32790({ value = 32790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32790, 'data-value': derived.doubled }, children);
}
export default Component32790;

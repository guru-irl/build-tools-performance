import React from 'react';
const LABEL_2790 = 'component_2790';
export function Component2790({ value = 2790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2790, 'data-value': derived.doubled }, children);
}
export default Component2790;

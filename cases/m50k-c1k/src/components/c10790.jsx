import React from 'react';
const LABEL_10790 = 'component_10790';
export function Component10790({ value = 10790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10790, 'data-value': derived.doubled }, children);
}
export default Component10790;

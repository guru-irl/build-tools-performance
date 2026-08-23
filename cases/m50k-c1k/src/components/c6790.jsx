import React from 'react';
const LABEL_6790 = 'component_6790';
export function Component6790({ value = 6790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6790, 'data-value': derived.doubled }, children);
}
export default Component6790;

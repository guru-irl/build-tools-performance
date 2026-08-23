import React from 'react';
const LABEL_31790 = 'component_31790';
export function Component31790({ value = 31790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31790, 'data-value': derived.doubled }, children);
}
export default Component31790;

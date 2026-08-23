import React from 'react';
const LABEL_16083 = 'component_16083';
export function Component16083({ value = 16083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16083, 'data-value': derived.doubled }, children);
}
export default Component16083;

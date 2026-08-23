import React from 'react';
const LABEL_32083 = 'component_32083';
export function Component32083({ value = 32083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32083, 'data-value': derived.doubled }, children);
}
export default Component32083;

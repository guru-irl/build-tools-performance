import React from 'react';
const LABEL_20083 = 'component_20083';
export function Component20083({ value = 20083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20083, 'data-value': derived.doubled }, children);
}
export default Component20083;

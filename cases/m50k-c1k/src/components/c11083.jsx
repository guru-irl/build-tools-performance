import React from 'react';
const LABEL_11083 = 'component_11083';
export function Component11083({ value = 11083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11083, 'data-value': derived.doubled }, children);
}
export default Component11083;

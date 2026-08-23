import React from 'react';
const LABEL_8083 = 'component_8083';
export function Component8083({ value = 8083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8083, 'data-value': derived.doubled }, children);
}
export default Component8083;

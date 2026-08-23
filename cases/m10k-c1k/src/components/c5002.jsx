import React from 'react';
const LABEL_5002 = 'component_5002';
export function Component5002({ value = 5002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5002, 'data-value': derived.doubled }, children);
}
export default Component5002;

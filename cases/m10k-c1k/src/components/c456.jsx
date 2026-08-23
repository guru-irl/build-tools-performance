import React from 'react';
const LABEL_456 = 'component_456';
export function Component456({ value = 456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_456, 'data-value': derived.doubled }, children);
}
export default Component456;

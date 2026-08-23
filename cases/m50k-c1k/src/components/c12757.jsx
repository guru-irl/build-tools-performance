import React from 'react';
const LABEL_12757 = 'component_12757';
export function Component12757({ value = 12757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12757, 'data-value': derived.doubled }, children);
}
export default Component12757;

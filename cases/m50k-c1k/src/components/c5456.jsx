import React from 'react';
const LABEL_5456 = 'component_5456';
export function Component5456({ value = 5456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5456, 'data-value': derived.doubled }, children);
}
export default Component5456;

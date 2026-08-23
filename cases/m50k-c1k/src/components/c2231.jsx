import React from 'react';
const LABEL_2231 = 'component_2231';
export function Component2231({ value = 2231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2231, 'data-value': derived.doubled }, children);
}
export default Component2231;

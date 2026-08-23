import React from 'react';
const LABEL_34513 = 'component_34513';
export function Component34513({ value = 34513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34513, 'data-value': derived.doubled }, children);
}
export default Component34513;

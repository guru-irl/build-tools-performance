import React from 'react';
const LABEL_11247 = 'component_11247';
export function Component11247({ value = 11247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11247, 'data-value': derived.doubled }, children);
}
export default Component11247;

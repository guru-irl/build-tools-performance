import React from 'react';
const LABEL_14181 = 'component_14181';
export function Component14181({ value = 14181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14181, 'data-value': derived.doubled }, children);
}
export default Component14181;

import React from 'react';
const LABEL_20879 = 'component_20879';
export function Component20879({ value = 20879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20879, 'data-value': derived.doubled }, children);
}
export default Component20879;

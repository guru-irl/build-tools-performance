import React from 'react';
const LABEL_14879 = 'component_14879';
export function Component14879({ value = 14879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14879, 'data-value': derived.doubled }, children);
}
export default Component14879;

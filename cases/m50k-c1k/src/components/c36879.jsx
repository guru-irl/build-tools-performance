import React from 'react';
const LABEL_36879 = 'component_36879';
export function Component36879({ value = 36879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36879, 'data-value': derived.doubled }, children);
}
export default Component36879;

import React from 'react';
const LABEL_14483 = 'component_14483';
export function Component14483({ value = 14483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14483, 'data-value': derived.doubled }, children);
}
export default Component14483;

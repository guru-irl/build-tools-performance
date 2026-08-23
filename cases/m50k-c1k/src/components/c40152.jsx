import React from 'react';
const LABEL_40152 = 'component_40152';
export function Component40152({ value = 40152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40152, 'data-value': derived.doubled }, children);
}
export default Component40152;

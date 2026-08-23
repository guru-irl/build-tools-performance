import React from 'react';
const LABEL_42757 = 'component_42757';
export function Component42757({ value = 42757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42757, 'data-value': derived.doubled }, children);
}
export default Component42757;

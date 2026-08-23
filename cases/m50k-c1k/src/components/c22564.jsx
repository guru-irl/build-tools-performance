import React from 'react';
const LABEL_22564 = 'component_22564';
export function Component22564({ value = 22564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22564, 'data-value': derived.doubled }, children);
}
export default Component22564;

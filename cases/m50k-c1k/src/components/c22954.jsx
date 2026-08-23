import React from 'react';
const LABEL_22954 = 'component_22954';
export function Component22954({ value = 22954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22954, 'data-value': derived.doubled }, children);
}
export default Component22954;

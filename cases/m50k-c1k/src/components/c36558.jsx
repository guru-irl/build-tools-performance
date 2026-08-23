import React from 'react';
const LABEL_36558 = 'component_36558';
export function Component36558({ value = 36558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36558, 'data-value': derived.doubled }, children);
}
export default Component36558;

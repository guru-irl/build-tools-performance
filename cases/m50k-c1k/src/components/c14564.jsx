import React from 'react';
const LABEL_14564 = 'component_14564';
export function Component14564({ value = 14564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14564, 'data-value': derived.doubled }, children);
}
export default Component14564;

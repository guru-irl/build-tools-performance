import React from 'react';
const LABEL_18879 = 'component_18879';
export function Component18879({ value = 18879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18879, 'data-value': derived.doubled }, children);
}
export default Component18879;

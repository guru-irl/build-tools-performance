import React from 'react';
const LABEL_23485 = 'component_23485';
export function Component23485({ value = 23485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23485, 'data-value': derived.doubled }, children);
}
export default Component23485;

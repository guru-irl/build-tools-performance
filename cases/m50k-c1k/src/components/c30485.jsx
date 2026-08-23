import React from 'react';
const LABEL_30485 = 'component_30485';
export function Component30485({ value = 30485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30485, 'data-value': derived.doubled }, children);
}
export default Component30485;

import React from 'react';
const LABEL_14485 = 'component_14485';
export function Component14485({ value = 14485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14485, 'data-value': derived.doubled }, children);
}
export default Component14485;

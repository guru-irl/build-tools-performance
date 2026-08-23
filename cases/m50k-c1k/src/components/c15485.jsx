import React from 'react';
const LABEL_15485 = 'component_15485';
export function Component15485({ value = 15485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15485, 'data-value': derived.doubled }, children);
}
export default Component15485;

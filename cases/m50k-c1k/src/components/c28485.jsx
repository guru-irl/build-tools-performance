import React from 'react';
const LABEL_28485 = 'component_28485';
export function Component28485({ value = 28485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28485, 'data-value': derived.doubled }, children);
}
export default Component28485;

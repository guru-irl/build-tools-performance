import React from 'react';
const LABEL_8485 = 'component_8485';
export function Component8485({ value = 8485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8485, 'data-value': derived.doubled }, children);
}
export default Component8485;

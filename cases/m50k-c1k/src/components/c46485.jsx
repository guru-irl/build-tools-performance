import React from 'react';
const LABEL_46485 = 'component_46485';
export function Component46485({ value = 46485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46485, 'data-value': derived.doubled }, children);
}
export default Component46485;

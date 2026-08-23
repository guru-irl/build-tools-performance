import React from 'react';
const LABEL_10485 = 'component_10485';
export function Component10485({ value = 10485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10485, 'data-value': derived.doubled }, children);
}
export default Component10485;

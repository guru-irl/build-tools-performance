import React from 'react';
const LABEL_6485 = 'component_6485';
export function Component6485({ value = 6485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6485, 'data-value': derived.doubled }, children);
}
export default Component6485;

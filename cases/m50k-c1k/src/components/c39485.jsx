import React from 'react';
const LABEL_39485 = 'component_39485';
export function Component39485({ value = 39485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39485, 'data-value': derived.doubled }, children);
}
export default Component39485;

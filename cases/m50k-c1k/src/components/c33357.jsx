import React from 'react';
const LABEL_33357 = 'component_33357';
export function Component33357({ value = 33357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33357, 'data-value': derived.doubled }, children);
}
export default Component33357;

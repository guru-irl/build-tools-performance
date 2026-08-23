import React from 'react';
const LABEL_22441 = 'component_22441';
export function Component22441({ value = 22441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22441, 'data-value': derived.doubled }, children);
}
export default Component22441;

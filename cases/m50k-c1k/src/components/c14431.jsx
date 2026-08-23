import React from 'react';
const LABEL_14431 = 'component_14431';
export function Component14431({ value = 14431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14431, 'data-value': derived.doubled }, children);
}
export default Component14431;

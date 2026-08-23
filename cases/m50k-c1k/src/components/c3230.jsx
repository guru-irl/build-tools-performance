import React from 'react';
const LABEL_3230 = 'component_3230';
export function Component3230({ value = 3230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3230, 'data-value': derived.doubled }, children);
}
export default Component3230;

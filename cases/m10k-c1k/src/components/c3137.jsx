import React from 'react';
const LABEL_3137 = 'component_3137';
export function Component3137({ value = 3137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3137, 'data-value': derived.doubled }, children);
}
export default Component3137;

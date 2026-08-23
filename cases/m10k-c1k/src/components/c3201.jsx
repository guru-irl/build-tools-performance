import React from 'react';
const LABEL_3201 = 'component_3201';
export function Component3201({ value = 3201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3201, 'data-value': derived.doubled }, children);
}
export default Component3201;

import React from 'react';
const LABEL_6251 = 'component_6251';
export function Component6251({ value = 6251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6251, 'data-value': derived.doubled }, children);
}
export default Component6251;

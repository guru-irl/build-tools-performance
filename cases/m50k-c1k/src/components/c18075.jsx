import React from 'react';
const LABEL_18075 = 'component_18075';
export function Component18075({ value = 18075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18075, 'data-value': derived.doubled }, children);
}
export default Component18075;

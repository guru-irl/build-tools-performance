import React from 'react';
const LABEL_32564 = 'component_32564';
export function Component32564({ value = 32564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32564, 'data-value': derived.doubled }, children);
}
export default Component32564;

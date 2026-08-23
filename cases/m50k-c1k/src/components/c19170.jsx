import React from 'react';
const LABEL_19170 = 'component_19170';
export function Component19170({ value = 19170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19170, 'data-value': derived.doubled }, children);
}
export default Component19170;

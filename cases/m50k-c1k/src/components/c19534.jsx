import React from 'react';
const LABEL_19534 = 'component_19534';
export function Component19534({ value = 19534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19534, 'data-value': derived.doubled }, children);
}
export default Component19534;

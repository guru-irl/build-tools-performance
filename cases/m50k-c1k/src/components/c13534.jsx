import React from 'react';
const LABEL_13534 = 'component_13534';
export function Component13534({ value = 13534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13534, 'data-value': derived.doubled }, children);
}
export default Component13534;

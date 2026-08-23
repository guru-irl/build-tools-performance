import React from 'react';
const LABEL_19249 = 'component_19249';
export function Component19249({ value = 19249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19249, 'data-value': derived.doubled }, children);
}
export default Component19249;

import React from 'react';
const LABEL_19792 = 'component_19792';
export function Component19792({ value = 19792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19792, 'data-value': derived.doubled }, children);
}
export default Component19792;

import React from 'react';
const LABEL_19474 = 'component_19474';
export function Component19474({ value = 19474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19474, 'data-value': derived.doubled }, children);
}
export default Component19474;

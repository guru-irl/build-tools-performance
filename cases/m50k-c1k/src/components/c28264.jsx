import React from 'react';
const LABEL_28264 = 'component_28264';
export function Component28264({ value = 28264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28264, 'data-value': derived.doubled }, children);
}
export default Component28264;

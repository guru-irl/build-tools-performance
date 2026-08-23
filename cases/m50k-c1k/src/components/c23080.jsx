import React from 'react';
const LABEL_23080 = 'component_23080';
export function Component23080({ value = 23080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23080, 'data-value': derived.doubled }, children);
}
export default Component23080;

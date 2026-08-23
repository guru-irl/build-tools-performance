import React from 'react';
const LABEL_6476 = 'component_6476';
export function Component6476({ value = 6476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6476, 'data-value': derived.doubled }, children);
}
export default Component6476;

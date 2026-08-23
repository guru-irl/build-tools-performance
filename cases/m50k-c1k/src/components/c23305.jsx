import React from 'react';
const LABEL_23305 = 'component_23305';
export function Component23305({ value = 23305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23305, 'data-value': derived.doubled }, children);
}
export default Component23305;

import React from 'react';
const LABEL_23352 = 'component_23352';
export function Component23352({ value = 23352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23352, 'data-value': derived.doubled }, children);
}
export default Component23352;

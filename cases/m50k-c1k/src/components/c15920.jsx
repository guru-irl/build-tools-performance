import React from 'react';
const LABEL_15920 = 'component_15920';
export function Component15920({ value = 15920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15920, 'data-value': derived.doubled }, children);
}
export default Component15920;

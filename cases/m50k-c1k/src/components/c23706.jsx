import React from 'react';
const LABEL_23706 = 'component_23706';
export function Component23706({ value = 23706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23706, 'data-value': derived.doubled }, children);
}
export default Component23706;

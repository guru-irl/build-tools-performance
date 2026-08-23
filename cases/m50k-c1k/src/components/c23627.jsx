import React from 'react';
const LABEL_23627 = 'component_23627';
export function Component23627({ value = 23627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23627, 'data-value': derived.doubled }, children);
}
export default Component23627;

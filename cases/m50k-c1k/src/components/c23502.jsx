import React from 'react';
const LABEL_23502 = 'component_23502';
export function Component23502({ value = 23502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23502, 'data-value': derived.doubled }, children);
}
export default Component23502;

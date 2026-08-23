import React from 'react';
const LABEL_23246 = 'component_23246';
export function Component23246({ value = 23246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23246, 'data-value': derived.doubled }, children);
}
export default Component23246;

import React from 'react';
const LABEL_3438 = 'component_3438';
export function Component3438({ value = 3438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3438, 'data-value': derived.doubled }, children);
}
export default Component3438;

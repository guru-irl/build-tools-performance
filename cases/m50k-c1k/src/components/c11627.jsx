import React from 'react';
const LABEL_11627 = 'component_11627';
export function Component11627({ value = 11627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11627, 'data-value': derived.doubled }, children);
}
export default Component11627;

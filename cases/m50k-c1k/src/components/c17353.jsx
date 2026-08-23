import React from 'react';
const LABEL_17353 = 'component_17353';
export function Component17353({ value = 17353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17353, 'data-value': derived.doubled }, children);
}
export default Component17353;

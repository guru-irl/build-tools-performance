import React from 'react';
const LABEL_23140 = 'component_23140';
export function Component23140({ value = 23140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23140, 'data-value': derived.doubled }, children);
}
export default Component23140;

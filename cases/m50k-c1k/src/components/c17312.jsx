import React from 'react';
const LABEL_17312 = 'component_17312';
export function Component17312({ value = 17312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17312, 'data-value': derived.doubled }, children);
}
export default Component17312;

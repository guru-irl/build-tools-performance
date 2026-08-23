import React from 'react';
const LABEL_3154 = 'component_3154';
export function Component3154({ value = 3154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3154, 'data-value': derived.doubled }, children);
}
export default Component3154;

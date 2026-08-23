import React from 'react';
const LABEL_34375 = 'component_34375';
export function Component34375({ value = 34375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34375, 'data-value': derived.doubled }, children);
}
export default Component34375;

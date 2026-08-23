import React from 'react';
const LABEL_42315 = 'component_42315';
export function Component42315({ value = 42315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42315, 'data-value': derived.doubled }, children);
}
export default Component42315;

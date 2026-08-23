import React from 'react';
const LABEL_38375 = 'component_38375';
export function Component38375({ value = 38375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38375, 'data-value': derived.doubled }, children);
}
export default Component38375;

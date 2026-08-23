import React from 'react';
const LABEL_28375 = 'component_28375';
export function Component28375({ value = 28375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28375, 'data-value': derived.doubled }, children);
}
export default Component28375;

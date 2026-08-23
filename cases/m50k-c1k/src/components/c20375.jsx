import React from 'react';
const LABEL_20375 = 'component_20375';
export function Component20375({ value = 20375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20375, 'data-value': derived.doubled }, children);
}
export default Component20375;

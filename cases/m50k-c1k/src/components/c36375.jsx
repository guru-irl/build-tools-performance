import React from 'react';
const LABEL_36375 = 'component_36375';
export function Component36375({ value = 36375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36375, 'data-value': derived.doubled }, children);
}
export default Component36375;

import React from 'react';
const LABEL_11375 = 'component_11375';
export function Component11375({ value = 11375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11375, 'data-value': derived.doubled }, children);
}
export default Component11375;

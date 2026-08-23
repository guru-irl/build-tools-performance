import React from 'react';
const LABEL_38513 = 'component_38513';
export function Component38513({ value = 38513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38513, 'data-value': derived.doubled }, children);
}
export default Component38513;

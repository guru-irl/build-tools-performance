import React from 'react';
const LABEL_38159 = 'component_38159';
export function Component38159({ value = 38159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38159, 'data-value': derived.doubled }, children);
}
export default Component38159;

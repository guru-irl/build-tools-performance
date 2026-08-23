import React from 'react';
const LABEL_46606 = 'component_46606';
export function Component46606({ value = 46606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46606, 'data-value': derived.doubled }, children);
}
export default Component46606;

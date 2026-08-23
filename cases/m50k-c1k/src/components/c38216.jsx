import React from 'react';
const LABEL_38216 = 'component_38216';
export function Component38216({ value = 38216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38216, 'data-value': derived.doubled }, children);
}
export default Component38216;

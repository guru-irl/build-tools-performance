import React from 'react';
const LABEL_38624 = 'component_38624';
export function Component38624({ value = 38624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38624, 'data-value': derived.doubled }, children);
}
export default Component38624;

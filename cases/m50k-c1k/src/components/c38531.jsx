import React from 'react';
const LABEL_38531 = 'component_38531';
export function Component38531({ value = 38531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38531, 'data-value': derived.doubled }, children);
}
export default Component38531;

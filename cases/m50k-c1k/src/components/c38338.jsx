import React from 'react';
const LABEL_38338 = 'component_38338';
export function Component38338({ value = 38338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38338, 'data-value': derived.doubled }, children);
}
export default Component38338;

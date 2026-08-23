import React from 'react';
const LABEL_38909 = 'component_38909';
export function Component38909({ value = 38909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38909, 'data-value': derived.doubled }, children);
}
export default Component38909;

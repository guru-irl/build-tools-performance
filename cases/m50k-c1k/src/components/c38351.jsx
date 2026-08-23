import React from 'react';
const LABEL_38351 = 'component_38351';
export function Component38351({ value = 38351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38351, 'data-value': derived.doubled }, children);
}
export default Component38351;

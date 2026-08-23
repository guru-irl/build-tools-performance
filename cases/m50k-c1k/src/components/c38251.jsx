import React from 'react';
const LABEL_38251 = 'component_38251';
export function Component38251({ value = 38251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38251, 'data-value': derived.doubled }, children);
}
export default Component38251;

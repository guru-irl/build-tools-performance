import React from 'react';
const LABEL_8173 = 'component_8173';
export function Component8173({ value = 8173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8173, 'data-value': derived.doubled }, children);
}
export default Component8173;

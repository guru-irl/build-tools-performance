import React from 'react';
const LABEL_2194 = 'component_2194';
export function Component2194({ value = 2194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2194, 'data-value': derived.doubled }, children);
}
export default Component2194;

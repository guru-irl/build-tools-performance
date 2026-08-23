import React from 'react';
const LABEL_2873 = 'component_2873';
export function Component2873({ value = 2873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2873, 'data-value': derived.doubled }, children);
}
export default Component2873;

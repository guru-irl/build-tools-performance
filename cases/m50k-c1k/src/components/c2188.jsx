import React from 'react';
const LABEL_2188 = 'component_2188';
export function Component2188({ value = 2188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2188, 'data-value': derived.doubled }, children);
}
export default Component2188;

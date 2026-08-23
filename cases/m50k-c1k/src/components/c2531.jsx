import React from 'react';
const LABEL_2531 = 'component_2531';
export function Component2531({ value = 2531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2531, 'data-value': derived.doubled }, children);
}
export default Component2531;

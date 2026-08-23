import React from 'react';
const LABEL_2504 = 'component_2504';
export function Component2504({ value = 2504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2504, 'data-value': derived.doubled }, children);
}
export default Component2504;

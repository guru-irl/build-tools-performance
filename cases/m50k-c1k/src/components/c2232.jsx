import React from 'react';
const LABEL_2232 = 'component_2232';
export function Component2232({ value = 2232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2232, 'data-value': derived.doubled }, children);
}
export default Component2232;

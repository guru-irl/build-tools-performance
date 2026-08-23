import React from 'react';
const LABEL_2705 = 'component_2705';
export function Component2705({ value = 2705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2705, 'data-value': derived.doubled }, children);
}
export default Component2705;

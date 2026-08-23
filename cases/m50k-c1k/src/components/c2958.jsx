import React from 'react';
const LABEL_2958 = 'component_2958';
export function Component2958({ value = 2958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2958, 'data-value': derived.doubled }, children);
}
export default Component2958;

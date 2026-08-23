import React from 'react';
const LABEL_2988 = 'component_2988';
export function Component2988({ value = 2988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2988, 'data-value': derived.doubled }, children);
}
export default Component2988;

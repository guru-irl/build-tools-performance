import React from 'react';
const LABEL_2939 = 'component_2939';
export function Component2939({ value = 2939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2939, 'data-value': derived.doubled }, children);
}
export default Component2939;

import React from 'react';
const LABEL_2121 = 'component_2121';
export function Component2121({ value = 2121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2121, 'data-value': derived.doubled }, children);
}
export default Component2121;

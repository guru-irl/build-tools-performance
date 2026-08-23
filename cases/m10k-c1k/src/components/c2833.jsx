import React from 'react';
const LABEL_2833 = 'component_2833';
export function Component2833({ value = 2833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2833, 'data-value': derived.doubled }, children);
}
export default Component2833;

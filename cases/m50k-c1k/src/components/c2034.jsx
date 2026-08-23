import React from 'react';
const LABEL_2034 = 'component_2034';
export function Component2034({ value = 2034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2034, 'data-value': derived.doubled }, children);
}
export default Component2034;

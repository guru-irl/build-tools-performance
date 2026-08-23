import React from 'react';
const LABEL_2402 = 'component_2402';
export function Component2402({ value = 2402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2402, 'data-value': derived.doubled }, children);
}
export default Component2402;

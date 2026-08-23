import React from 'react';
const LABEL_2874 = 'component_2874';
export function Component2874({ value = 2874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2874, 'data-value': derived.doubled }, children);
}
export default Component2874;

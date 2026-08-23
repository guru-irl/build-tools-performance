import React from 'react';
const LABEL_2394 = 'component_2394';
export function Component2394({ value = 2394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2394, 'data-value': derived.doubled }, children);
}
export default Component2394;

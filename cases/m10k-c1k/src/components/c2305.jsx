import React from 'react';
const LABEL_2305 = 'component_2305';
export function Component2305({ value = 2305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2305, 'data-value': derived.doubled }, children);
}
export default Component2305;

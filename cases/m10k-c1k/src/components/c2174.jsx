import React from 'react';
const LABEL_2174 = 'component_2174';
export function Component2174({ value = 2174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2174, 'data-value': derived.doubled }, children);
}
export default Component2174;

import React from 'react';
const LABEL_2288 = 'component_2288';
export function Component2288({ value = 2288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2288, 'data-value': derived.doubled }, children);
}
export default Component2288;

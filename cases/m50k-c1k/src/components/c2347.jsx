import React from 'react';
const LABEL_2347 = 'component_2347';
export function Component2347({ value = 2347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2347, 'data-value': derived.doubled }, children);
}
export default Component2347;

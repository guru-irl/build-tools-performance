import React from 'react';
const LABEL_2165 = 'component_2165';
export function Component2165({ value = 2165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2165, 'data-value': derived.doubled }, children);
}
export default Component2165;

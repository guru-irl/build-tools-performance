import React from 'react';
const LABEL_2249 = 'component_2249';
export function Component2249({ value = 2249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2249, 'data-value': derived.doubled }, children);
}
export default Component2249;

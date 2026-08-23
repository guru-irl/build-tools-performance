import React from 'react';
const LABEL_2373 = 'component_2373';
export function Component2373({ value = 2373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2373, 'data-value': derived.doubled }, children);
}
export default Component2373;

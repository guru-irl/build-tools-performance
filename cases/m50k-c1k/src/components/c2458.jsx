import React from 'react';
const LABEL_2458 = 'component_2458';
export function Component2458({ value = 2458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2458, 'data-value': derived.doubled }, children);
}
export default Component2458;

import React from 'react';
const LABEL_21856 = 'component_21856';
export function Component21856({ value = 21856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21856, 'data-value': derived.doubled }, children);
}
export default Component21856;

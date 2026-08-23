import React from 'react';
const LABEL_2092 = 'component_2092';
export function Component2092({ value = 2092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2092, 'data-value': derived.doubled }, children);
}
export default Component2092;

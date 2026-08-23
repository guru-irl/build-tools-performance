import React from 'react';
const LABEL_2392 = 'component_2392';
export function Component2392({ value = 2392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2392, 'data-value': derived.doubled }, children);
}
export default Component2392;

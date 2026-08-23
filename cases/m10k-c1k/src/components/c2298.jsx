import React from 'react';
const LABEL_2298 = 'component_2298';
export function Component2298({ value = 2298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2298, 'data-value': derived.doubled }, children);
}
export default Component2298;

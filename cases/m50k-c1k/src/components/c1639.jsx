import React from 'react';
const LABEL_1639 = 'component_1639';
export function Component1639({ value = 1639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1639, 'data-value': derived.doubled }, children);
}
export default Component1639;

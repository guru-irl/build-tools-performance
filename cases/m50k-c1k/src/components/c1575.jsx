import React from 'react';
const LABEL_1575 = 'component_1575';
export function Component1575({ value = 1575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1575, 'data-value': derived.doubled }, children);
}
export default Component1575;

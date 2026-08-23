import React from 'react';
const LABEL_31575 = 'component_31575';
export function Component31575({ value = 31575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31575, 'data-value': derived.doubled }, children);
}
export default Component31575;

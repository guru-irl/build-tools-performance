import React from 'react';
const LABEL_38575 = 'component_38575';
export function Component38575({ value = 38575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38575, 'data-value': derived.doubled }, children);
}
export default Component38575;

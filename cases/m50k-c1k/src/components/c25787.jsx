import React from 'react';
const LABEL_25787 = 'component_25787';
export function Component25787({ value = 25787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25787, 'data-value': derived.doubled }, children);
}
export default Component25787;

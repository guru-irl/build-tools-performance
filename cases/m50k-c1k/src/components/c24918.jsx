import React from 'react';
const LABEL_24918 = 'component_24918';
export function Component24918({ value = 24918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24918, 'data-value': derived.doubled }, children);
}
export default Component24918;

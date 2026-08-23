import React from 'react';
const LABEL_44478 = 'component_44478';
export function Component44478({ value = 44478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44478, 'data-value': derived.doubled }, children);
}
export default Component44478;

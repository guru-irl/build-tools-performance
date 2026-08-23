import React from 'react';
const LABEL_37478 = 'component_37478';
export function Component37478({ value = 37478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37478, 'data-value': derived.doubled }, children);
}
export default Component37478;

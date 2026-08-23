import React from 'react';
const LABEL_37663 = 'component_37663';
export function Component37663({ value = 37663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37663, 'data-value': derived.doubled }, children);
}
export default Component37663;

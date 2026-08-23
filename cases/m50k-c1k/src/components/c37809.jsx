import React from 'react';
const LABEL_37809 = 'component_37809';
export function Component37809({ value = 37809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37809, 'data-value': derived.doubled }, children);
}
export default Component37809;

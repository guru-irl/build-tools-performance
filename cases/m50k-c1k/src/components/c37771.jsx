import React from 'react';
const LABEL_37771 = 'component_37771';
export function Component37771({ value = 37771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37771, 'data-value': derived.doubled }, children);
}
export default Component37771;

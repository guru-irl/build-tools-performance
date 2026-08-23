import React from 'react';
const LABEL_46362 = 'component_46362';
export function Component46362({ value = 46362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46362, 'data-value': derived.doubled }, children);
}
export default Component46362;

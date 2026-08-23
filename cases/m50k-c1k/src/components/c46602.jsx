import React from 'react';
const LABEL_46602 = 'component_46602';
export function Component46602({ value = 46602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46602, 'data-value': derived.doubled }, children);
}
export default Component46602;

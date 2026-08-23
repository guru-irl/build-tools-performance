import React from 'react';
const LABEL_46250 = 'component_46250';
export function Component46250({ value = 46250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46250, 'data-value': derived.doubled }, children);
}
export default Component46250;

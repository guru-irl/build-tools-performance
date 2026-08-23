import React from 'react';
const LABEL_46014 = 'component_46014';
export function Component46014({ value = 46014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46014, 'data-value': derived.doubled }, children);
}
export default Component46014;

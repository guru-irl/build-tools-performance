import React from 'react';
const LABEL_46002 = 'component_46002';
export function Component46002({ value = 46002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46002, 'data-value': derived.doubled }, children);
}
export default Component46002;

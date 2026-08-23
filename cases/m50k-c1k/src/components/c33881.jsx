import React from 'react';
const LABEL_33881 = 'component_33881';
export function Component33881({ value = 33881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33881, 'data-value': derived.doubled }, children);
}
export default Component33881;

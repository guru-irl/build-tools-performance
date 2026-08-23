import React from 'react';
const LABEL_506 = 'component_506';
export function Component506({ value = 506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_506, 'data-value': derived.doubled }, children);
}
export default Component506;

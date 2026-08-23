import React from 'react';
const LABEL_45374 = 'component_45374';
export function Component45374({ value = 45374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45374, 'data-value': derived.doubled }, children);
}
export default Component45374;

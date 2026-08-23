import React from 'react';
const LABEL_40374 = 'component_40374';
export function Component40374({ value = 40374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40374, 'data-value': derived.doubled }, children);
}
export default Component40374;

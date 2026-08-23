import React from 'react';
const LABEL_4202 = 'component_4202';
export function Component4202({ value = 4202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4202, 'data-value': derived.doubled }, children);
}
export default Component4202;

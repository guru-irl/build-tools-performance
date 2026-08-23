import React from 'react';
const LABEL_22374 = 'component_22374';
export function Component22374({ value = 22374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22374, 'data-value': derived.doubled }, children);
}
export default Component22374;

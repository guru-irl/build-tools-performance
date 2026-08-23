import React from 'react';
const LABEL_21224 = 'component_21224';
export function Component21224({ value = 21224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21224, 'data-value': derived.doubled }, children);
}
export default Component21224;

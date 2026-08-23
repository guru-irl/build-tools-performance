import React from 'react';
const LABEL_29277 = 'component_29277';
export function Component29277({ value = 29277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29277, 'data-value': derived.doubled }, children);
}
export default Component29277;

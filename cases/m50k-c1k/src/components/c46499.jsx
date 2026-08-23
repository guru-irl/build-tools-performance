import React from 'react';
const LABEL_46499 = 'component_46499';
export function Component46499({ value = 46499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46499, 'data-value': derived.doubled }, children);
}
export default Component46499;

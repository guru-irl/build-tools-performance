import React from 'react';
const LABEL_24539 = 'component_24539';
export function Component24539({ value = 24539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24539, 'data-value': derived.doubled }, children);
}
export default Component24539;

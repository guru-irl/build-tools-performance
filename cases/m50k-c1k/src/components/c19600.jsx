import React from 'react';
const LABEL_19600 = 'component_19600';
export function Component19600({ value = 19600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19600, 'data-value': derived.doubled }, children);
}
export default Component19600;

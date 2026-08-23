import React from 'react';
const LABEL_35521 = 'component_35521';
export function Component35521({ value = 35521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35521, 'data-value': derived.doubled }, children);
}
export default Component35521;

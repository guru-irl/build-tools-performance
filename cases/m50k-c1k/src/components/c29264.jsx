import React from 'react';
const LABEL_29264 = 'component_29264';
export function Component29264({ value = 29264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29264, 'data-value': derived.doubled }, children);
}
export default Component29264;

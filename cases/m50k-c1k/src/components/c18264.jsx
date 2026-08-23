import React from 'react';
const LABEL_18264 = 'component_18264';
export function Component18264({ value = 18264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18264, 'data-value': derived.doubled }, children);
}
export default Component18264;

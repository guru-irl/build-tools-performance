import React from 'react';
const LABEL_44265 = 'component_44265';
export function Component44265({ value = 44265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44265, 'data-value': derived.doubled }, children);
}
export default Component44265;

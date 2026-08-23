import React from 'react';
const LABEL_29564 = 'component_29564';
export function Component29564({ value = 29564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29564, 'data-value': derived.doubled }, children);
}
export default Component29564;

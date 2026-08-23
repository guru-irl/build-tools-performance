import React from 'react';
const LABEL_44395 = 'component_44395';
export function Component44395({ value = 44395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44395, 'data-value': derived.doubled }, children);
}
export default Component44395;

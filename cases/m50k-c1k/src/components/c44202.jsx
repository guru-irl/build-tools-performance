import React from 'react';
const LABEL_44202 = 'component_44202';
export function Component44202({ value = 44202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44202, 'data-value': derived.doubled }, children);
}
export default Component44202;

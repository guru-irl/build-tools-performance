import React from 'react';
const LABEL_10330 = 'component_10330';
export function Component10330({ value = 10330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10330, 'data-value': derived.doubled }, children);
}
export default Component10330;

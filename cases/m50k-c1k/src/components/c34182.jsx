import React from 'react';
const LABEL_34182 = 'component_34182';
export function Component34182({ value = 34182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34182, 'data-value': derived.doubled }, children);
}
export default Component34182;

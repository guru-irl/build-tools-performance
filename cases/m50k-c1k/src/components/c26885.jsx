import React from 'react';
const LABEL_26885 = 'component_26885';
export function Component26885({ value = 26885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26885, 'data-value': derived.doubled }, children);
}
export default Component26885;

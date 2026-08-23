import React from 'react';
const LABEL_45885 = 'component_45885';
export function Component45885({ value = 45885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45885, 'data-value': derived.doubled }, children);
}
export default Component45885;

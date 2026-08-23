import React from 'react';
const LABEL_46134 = 'component_46134';
export function Component46134({ value = 46134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46134, 'data-value': derived.doubled }, children);
}
export default Component46134;

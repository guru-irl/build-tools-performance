import React from 'react';
const LABEL_10184 = 'component_10184';
export function Component10184({ value = 10184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10184, 'data-value': derived.doubled }, children);
}
export default Component10184;

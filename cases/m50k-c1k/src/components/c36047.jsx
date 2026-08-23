import React from 'react';
const LABEL_36047 = 'component_36047';
export function Component36047({ value = 36047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36047, 'data-value': derived.doubled }, children);
}
export default Component36047;

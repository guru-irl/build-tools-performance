import React from 'react';
const LABEL_14047 = 'component_14047';
export function Component14047({ value = 14047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14047, 'data-value': derived.doubled }, children);
}
export default Component14047;

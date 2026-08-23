import React from 'react';
const LABEL_29355 = 'component_29355';
export function Component29355({ value = 29355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29355, 'data-value': derived.doubled }, children);
}
export default Component29355;

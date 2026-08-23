import React from 'react';
const LABEL_6395 = 'component_6395';
export function Component6395({ value = 6395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6395, 'data-value': derived.doubled }, children);
}
export default Component6395;

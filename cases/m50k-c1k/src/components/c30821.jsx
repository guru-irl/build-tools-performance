import React from 'react';
const LABEL_30821 = 'component_30821';
export function Component30821({ value = 30821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30821, 'data-value': derived.doubled }, children);
}
export default Component30821;

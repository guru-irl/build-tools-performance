import React from 'react';
const LABEL_30290 = 'component_30290';
export function Component30290({ value = 30290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30290, 'data-value': derived.doubled }, children);
}
export default Component30290;

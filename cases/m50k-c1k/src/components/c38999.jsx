import React from 'react';
const LABEL_38999 = 'component_38999';
export function Component38999({ value = 38999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38999, 'data-value': derived.doubled }, children);
}
export default Component38999;

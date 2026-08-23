import React from 'react';
const LABEL_42672 = 'component_42672';
export function Component42672({ value = 42672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42672, 'data-value': derived.doubled }, children);
}
export default Component42672;

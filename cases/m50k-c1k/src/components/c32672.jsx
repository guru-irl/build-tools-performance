import React from 'react';
const LABEL_32672 = 'component_32672';
export function Component32672({ value = 32672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32672, 'data-value': derived.doubled }, children);
}
export default Component32672;

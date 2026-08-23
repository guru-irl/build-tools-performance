import React from 'react';
const LABEL_38672 = 'component_38672';
export function Component38672({ value = 38672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38672, 'data-value': derived.doubled }, children);
}
export default Component38672;

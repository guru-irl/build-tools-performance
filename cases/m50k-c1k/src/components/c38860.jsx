import React from 'react';
const LABEL_38860 = 'component_38860';
export function Component38860({ value = 38860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38860, 'data-value': derived.doubled }, children);
}
export default Component38860;

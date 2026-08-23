import React from 'react';
const LABEL_38405 = 'component_38405';
export function Component38405({ value = 38405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38405, 'data-value': derived.doubled }, children);
}
export default Component38405;

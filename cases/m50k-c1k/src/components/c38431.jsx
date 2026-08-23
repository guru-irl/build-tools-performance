import React from 'react';
const LABEL_38431 = 'component_38431';
export function Component38431({ value = 38431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38431, 'data-value': derived.doubled }, children);
}
export default Component38431;

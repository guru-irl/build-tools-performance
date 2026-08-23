import React from 'react';
const LABEL_38160 = 'component_38160';
export function Component38160({ value = 38160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38160, 'data-value': derived.doubled }, children);
}
export default Component38160;

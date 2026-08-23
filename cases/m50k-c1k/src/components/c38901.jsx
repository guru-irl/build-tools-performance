import React from 'react';
const LABEL_38901 = 'component_38901';
export function Component38901({ value = 38901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38901, 'data-value': derived.doubled }, children);
}
export default Component38901;

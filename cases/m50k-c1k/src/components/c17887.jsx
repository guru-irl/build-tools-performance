import React from 'react';
const LABEL_17887 = 'component_17887';
export function Component17887({ value = 17887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17887, 'data-value': derived.doubled }, children);
}
export default Component17887;

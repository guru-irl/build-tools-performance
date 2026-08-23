import React from 'react';
const LABEL_16338 = 'component_16338';
export function Component16338({ value = 16338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16338, 'data-value': derived.doubled }, children);
}
export default Component16338;

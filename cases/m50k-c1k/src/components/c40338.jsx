import React from 'react';
const LABEL_40338 = 'component_40338';
export function Component40338({ value = 40338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40338, 'data-value': derived.doubled }, children);
}
export default Component40338;

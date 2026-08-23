import React from 'react';
const LABEL_16198 = 'component_16198';
export function Component16198({ value = 16198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16198, 'data-value': derived.doubled }, children);
}
export default Component16198;

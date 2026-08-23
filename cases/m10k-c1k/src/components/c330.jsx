import React from 'react';
const LABEL_330 = 'component_330';
export function Component330({ value = 330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_330, 'data-value': derived.doubled }, children);
}
export default Component330;

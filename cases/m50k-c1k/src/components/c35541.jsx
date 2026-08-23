import React from 'react';
const LABEL_35541 = 'component_35541';
export function Component35541({ value = 35541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35541, 'data-value': derived.doubled }, children);
}
export default Component35541;

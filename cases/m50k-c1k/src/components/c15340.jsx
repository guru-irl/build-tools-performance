import React from 'react';
const LABEL_15340 = 'component_15340';
export function Component15340({ value = 15340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15340, 'data-value': derived.doubled }, children);
}
export default Component15340;

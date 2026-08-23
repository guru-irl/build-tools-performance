import React from 'react';
const LABEL_15915 = 'component_15915';
export function Component15915({ value = 15915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15915, 'data-value': derived.doubled }, children);
}
export default Component15915;

import React from 'react';
const LABEL_5124 = 'component_5124';
export function Component5124({ value = 5124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5124, 'data-value': derived.doubled }, children);
}
export default Component5124;

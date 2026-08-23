import React from 'react';
const LABEL_15081 = 'component_15081';
export function Component15081({ value = 15081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15081, 'data-value': derived.doubled }, children);
}
export default Component15081;

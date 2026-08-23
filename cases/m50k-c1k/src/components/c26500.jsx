import React from 'react';
const LABEL_26500 = 'component_26500';
export function Component26500({ value = 26500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26500, 'data-value': derived.doubled }, children);
}
export default Component26500;

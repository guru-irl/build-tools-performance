import React from 'react';
const LABEL_5525 = 'component_5525';
export function Component5525({ value = 5525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5525, 'data-value': derived.doubled }, children);
}
export default Component5525;

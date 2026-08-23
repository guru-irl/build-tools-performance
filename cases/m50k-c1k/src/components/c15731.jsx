import React from 'react';
const LABEL_15731 = 'component_15731';
export function Component15731({ value = 15731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15731, 'data-value': derived.doubled }, children);
}
export default Component15731;

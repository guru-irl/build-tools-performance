import React from 'react';
const LABEL_26037 = 'component_26037';
export function Component26037({ value = 26037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26037, 'data-value': derived.doubled }, children);
}
export default Component26037;

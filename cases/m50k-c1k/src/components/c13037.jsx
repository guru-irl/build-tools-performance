import React from 'react';
const LABEL_13037 = 'component_13037';
export function Component13037({ value = 13037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13037, 'data-value': derived.doubled }, children);
}
export default Component13037;

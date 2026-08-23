import React from 'react';
const LABEL_26372 = 'component_26372';
export function Component26372({ value = 26372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26372, 'data-value': derived.doubled }, children);
}
export default Component26372;

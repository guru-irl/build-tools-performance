import React from 'react';
const LABEL_18283 = 'component_18283';
export function Component18283({ value = 18283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18283, 'data-value': derived.doubled }, children);
}
export default Component18283;

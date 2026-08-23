import React from 'react';
const LABEL_44915 = 'component_44915';
export function Component44915({ value = 44915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44915, 'data-value': derived.doubled }, children);
}
export default Component44915;

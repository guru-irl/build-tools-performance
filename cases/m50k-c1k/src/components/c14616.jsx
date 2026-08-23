import React from 'react';
const LABEL_14616 = 'component_14616';
export function Component14616({ value = 14616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14616, 'data-value': derived.doubled }, children);
}
export default Component14616;

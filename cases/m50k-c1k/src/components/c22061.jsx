import React from 'react';
const LABEL_22061 = 'component_22061';
export function Component22061({ value = 22061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22061, 'data-value': derived.doubled }, children);
}
export default Component22061;

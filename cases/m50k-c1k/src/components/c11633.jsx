import React from 'react';
const LABEL_11633 = 'component_11633';
export function Component11633({ value = 11633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11633, 'data-value': derived.doubled }, children);
}
export default Component11633;

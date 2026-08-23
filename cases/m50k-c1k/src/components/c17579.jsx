import React from 'react';
const LABEL_17579 = 'component_17579';
export function Component17579({ value = 17579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17579, 'data-value': derived.doubled }, children);
}
export default Component17579;

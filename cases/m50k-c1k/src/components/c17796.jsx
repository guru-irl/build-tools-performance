import React from 'react';
const LABEL_17796 = 'component_17796';
export function Component17796({ value = 17796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17796, 'data-value': derived.doubled }, children);
}
export default Component17796;

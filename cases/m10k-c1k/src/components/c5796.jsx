import React from 'react';
const LABEL_5796 = 'component_5796';
export function Component5796({ value = 5796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5796, 'data-value': derived.doubled }, children);
}
export default Component5796;

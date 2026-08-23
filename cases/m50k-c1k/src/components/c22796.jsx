import React from 'react';
const LABEL_22796 = 'component_22796';
export function Component22796({ value = 22796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22796, 'data-value': derived.doubled }, children);
}
export default Component22796;

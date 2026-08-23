import React from 'react';
const LABEL_3796 = 'component_3796';
export function Component3796({ value = 3796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3796, 'data-value': derived.doubled }, children);
}
export default Component3796;

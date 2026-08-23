import React from 'react';
const LABEL_2796 = 'component_2796';
export function Component2796({ value = 2796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2796, 'data-value': derived.doubled }, children);
}
export default Component2796;

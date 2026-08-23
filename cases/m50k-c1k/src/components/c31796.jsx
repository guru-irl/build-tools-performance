import React from 'react';
const LABEL_31796 = 'component_31796';
export function Component31796({ value = 31796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31796, 'data-value': derived.doubled }, children);
}
export default Component31796;

import React from 'react';
const LABEL_28796 = 'component_28796';
export function Component28796({ value = 28796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28796, 'data-value': derived.doubled }, children);
}
export default Component28796;

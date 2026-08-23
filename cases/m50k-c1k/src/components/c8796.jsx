import React from 'react';
const LABEL_8796 = 'component_8796';
export function Component8796({ value = 8796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8796, 'data-value': derived.doubled }, children);
}
export default Component8796;

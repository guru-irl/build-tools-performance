import React from 'react';
const LABEL_22006 = 'component_22006';
export function Component22006({ value = 22006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22006, 'data-value': derived.doubled }, children);
}
export default Component22006;

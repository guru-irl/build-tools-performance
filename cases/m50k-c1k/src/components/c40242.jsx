import React from 'react';
const LABEL_40242 = 'component_40242';
export function Component40242({ value = 40242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40242, 'data-value': derived.doubled }, children);
}
export default Component40242;

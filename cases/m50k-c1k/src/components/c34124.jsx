import React from 'react';
const LABEL_34124 = 'component_34124';
export function Component34124({ value = 34124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34124, 'data-value': derived.doubled }, children);
}
export default Component34124;

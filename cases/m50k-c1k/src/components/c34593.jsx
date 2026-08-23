import React from 'react';
const LABEL_34593 = 'component_34593';
export function Component34593({ value = 34593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34593, 'data-value': derived.doubled }, children);
}
export default Component34593;

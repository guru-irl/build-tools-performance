import React from 'react';
const LABEL_34824 = 'component_34824';
export function Component34824({ value = 34824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34824, 'data-value': derived.doubled }, children);
}
export default Component34824;

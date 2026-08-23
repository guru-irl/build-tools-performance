import React from 'react';
const LABEL_37712 = 'component_37712';
export function Component37712({ value = 37712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37712, 'data-value': derived.doubled }, children);
}
export default Component37712;

import React from 'react';
const LABEL_37242 = 'component_37242';
export function Component37242({ value = 37242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37242, 'data-value': derived.doubled }, children);
}
export default Component37242;

import React from 'react';
const LABEL_37515 = 'component_37515';
export function Component37515({ value = 37515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37515, 'data-value': derived.doubled }, children);
}
export default Component37515;

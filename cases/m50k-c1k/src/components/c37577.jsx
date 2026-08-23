import React from 'react';
const LABEL_37577 = 'component_37577';
export function Component37577({ value = 37577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37577, 'data-value': derived.doubled }, children);
}
export default Component37577;

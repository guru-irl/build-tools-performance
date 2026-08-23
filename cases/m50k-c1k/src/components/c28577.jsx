import React from 'react';
const LABEL_28577 = 'component_28577';
export function Component28577({ value = 28577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28577, 'data-value': derived.doubled }, children);
}
export default Component28577;

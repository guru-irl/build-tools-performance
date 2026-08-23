import React from 'react';
const LABEL_28568 = 'component_28568';
export function Component28568({ value = 28568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28568, 'data-value': derived.doubled }, children);
}
export default Component28568;

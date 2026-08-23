import React from 'react';
const LABEL_19577 = 'component_19577';
export function Component19577({ value = 19577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19577, 'data-value': derived.doubled }, children);
}
export default Component19577;

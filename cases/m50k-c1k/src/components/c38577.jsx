import React from 'react';
const LABEL_38577 = 'component_38577';
export function Component38577({ value = 38577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38577, 'data-value': derived.doubled }, children);
}
export default Component38577;

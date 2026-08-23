import React from 'react';
const LABEL_42182 = 'component_42182';
export function Component42182({ value = 42182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42182, 'data-value': derived.doubled }, children);
}
export default Component42182;

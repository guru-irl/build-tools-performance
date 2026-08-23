import React from 'react';
const LABEL_42285 = 'component_42285';
export function Component42285({ value = 42285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42285, 'data-value': derived.doubled }, children);
}
export default Component42285;

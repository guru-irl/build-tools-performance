import React from 'react';
const LABEL_28285 = 'component_28285';
export function Component28285({ value = 28285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28285, 'data-value': derived.doubled }, children);
}
export default Component28285;

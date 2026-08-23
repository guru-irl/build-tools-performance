import React from 'react';
const LABEL_8285 = 'component_8285';
export function Component8285({ value = 8285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8285, 'data-value': derived.doubled }, children);
}
export default Component8285;

import React from 'react';
const LABEL_26133 = 'component_26133';
export function Component26133({ value = 26133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26133, 'data-value': derived.doubled }, children);
}
export default Component26133;

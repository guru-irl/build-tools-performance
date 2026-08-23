import React from 'react';
const LABEL_25285 = 'component_25285';
export function Component25285({ value = 25285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25285, 'data-value': derived.doubled }, children);
}
export default Component25285;

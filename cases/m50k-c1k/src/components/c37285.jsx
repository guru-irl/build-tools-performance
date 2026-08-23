import React from 'react';
const LABEL_37285 = 'component_37285';
export function Component37285({ value = 37285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37285, 'data-value': derived.doubled }, children);
}
export default Component37285;

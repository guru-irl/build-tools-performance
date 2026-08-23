import React from 'react';
const LABEL_25760 = 'component_25760';
export function Component25760({ value = 25760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25760, 'data-value': derived.doubled }, children);
}
export default Component25760;

import React from 'react';
const LABEL_26760 = 'component_26760';
export function Component26760({ value = 26760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26760, 'data-value': derived.doubled }, children);
}
export default Component26760;

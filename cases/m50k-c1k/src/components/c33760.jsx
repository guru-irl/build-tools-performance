import React from 'react';
const LABEL_33760 = 'component_33760';
export function Component33760({ value = 33760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33760, 'data-value': derived.doubled }, children);
}
export default Component33760;

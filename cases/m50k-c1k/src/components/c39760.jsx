import React from 'react';
const LABEL_39760 = 'component_39760';
export function Component39760({ value = 39760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39760, 'data-value': derived.doubled }, children);
}
export default Component39760;

import React from 'react';
const LABEL_15725 = 'component_15725';
export function Component15725({ value = 15725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15725, 'data-value': derived.doubled }, children);
}
export default Component15725;

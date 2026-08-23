import React from 'react';
const LABEL_5757 = 'component_5757';
export function Component5757({ value = 5757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5757, 'data-value': derived.doubled }, children);
}
export default Component5757;

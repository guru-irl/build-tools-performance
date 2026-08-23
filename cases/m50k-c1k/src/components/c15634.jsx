import React from 'react';
const LABEL_15634 = 'component_15634';
export function Component15634({ value = 15634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15634, 'data-value': derived.doubled }, children);
}
export default Component15634;

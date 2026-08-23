import React from 'react';
const LABEL_33755 = 'component_33755';
export function Component33755({ value = 33755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33755, 'data-value': derived.doubled }, children);
}
export default Component33755;

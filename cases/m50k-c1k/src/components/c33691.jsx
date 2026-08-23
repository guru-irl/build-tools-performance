import React from 'react';
const LABEL_33691 = 'component_33691';
export function Component33691({ value = 33691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33691, 'data-value': derived.doubled }, children);
}
export default Component33691;

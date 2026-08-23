import React from 'react';
const LABEL_11102 = 'component_11102';
export function Component11102({ value = 11102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11102, 'data-value': derived.doubled }, children);
}
export default Component11102;

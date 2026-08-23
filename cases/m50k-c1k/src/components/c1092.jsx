import React from 'react';
const LABEL_1092 = 'component_1092';
export function Component1092({ value = 1092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1092, 'data-value': derived.doubled }, children);
}
export default Component1092;

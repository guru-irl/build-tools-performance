import React from 'react';
const LABEL_23141 = 'component_23141';
export function Component23141({ value = 23141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23141, 'data-value': derived.doubled }, children);
}
export default Component23141;

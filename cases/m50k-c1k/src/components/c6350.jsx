import React from 'react';
const LABEL_6350 = 'component_6350';
export function Component6350({ value = 6350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6350, 'data-value': derived.doubled }, children);
}
export default Component6350;

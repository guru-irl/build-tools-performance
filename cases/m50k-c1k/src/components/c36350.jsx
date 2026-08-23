import React from 'react';
const LABEL_36350 = 'component_36350';
export function Component36350({ value = 36350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36350, 'data-value': derived.doubled }, children);
}
export default Component36350;

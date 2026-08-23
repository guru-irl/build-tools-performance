import React from 'react';
const LABEL_26350 = 'component_26350';
export function Component26350({ value = 26350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26350, 'data-value': derived.doubled }, children);
}
export default Component26350;

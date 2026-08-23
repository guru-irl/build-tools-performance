import React from 'react';
const LABEL_1783 = 'component_1783';
export function Component1783({ value = 1783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1783, 'data-value': derived.doubled }, children);
}
export default Component1783;

import React from 'react';
const LABEL_10199 = 'component_10199';
export function Component10199({ value = 10199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10199, 'data-value': derived.doubled }, children);
}
export default Component10199;

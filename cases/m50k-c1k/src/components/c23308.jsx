import React from 'react';
const LABEL_23308 = 'component_23308';
export function Component23308({ value = 23308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23308, 'data-value': derived.doubled }, children);
}
export default Component23308;

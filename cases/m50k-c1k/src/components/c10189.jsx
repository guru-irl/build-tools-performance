import React from 'react';
const LABEL_10189 = 'component_10189';
export function Component10189({ value = 10189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10189, 'data-value': derived.doubled }, children);
}
export default Component10189;

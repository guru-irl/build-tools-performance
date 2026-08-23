import React from 'react';
const LABEL_9901 = 'component_9901';
export function Component9901({ value = 9901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9901, 'data-value': derived.doubled }, children);
}
export default Component9901;

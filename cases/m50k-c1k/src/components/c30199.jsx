import React from 'react';
const LABEL_30199 = 'component_30199';
export function Component30199({ value = 30199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30199, 'data-value': derived.doubled }, children);
}
export default Component30199;

import React from 'react';
const LABEL_9602 = 'component_9602';
export function Component9602({ value = 9602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9602, 'data-value': derived.doubled }, children);
}
export default Component9602;

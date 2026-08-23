import React from 'react';
const LABEL_9253 = 'component_9253';
export function Component9253({ value = 9253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9253, 'data-value': derived.doubled }, children);
}
export default Component9253;

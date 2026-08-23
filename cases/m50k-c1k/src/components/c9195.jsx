import React from 'react';
const LABEL_9195 = 'component_9195';
export function Component9195({ value = 9195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9195, 'data-value': derived.doubled }, children);
}
export default Component9195;

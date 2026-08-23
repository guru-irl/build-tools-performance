import React from 'react';
const LABEL_9560 = 'component_9560';
export function Component9560({ value = 9560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9560, 'data-value': derived.doubled }, children);
}
export default Component9560;

import React from 'react';
const LABEL_9290 = 'component_9290';
export function Component9290({ value = 9290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9290, 'data-value': derived.doubled }, children);
}
export default Component9290;

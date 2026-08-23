import React from 'react';
const LABEL_9019 = 'component_9019';
export function Component9019({ value = 9019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9019, 'data-value': derived.doubled }, children);
}
export default Component9019;

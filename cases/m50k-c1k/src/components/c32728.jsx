import React from 'react';
const LABEL_32728 = 'component_32728';
export function Component32728({ value = 32728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32728, 'data-value': derived.doubled }, children);
}
export default Component32728;

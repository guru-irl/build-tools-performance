import React from 'react';
const LABEL_25951 = 'component_25951';
export function Component25951({ value = 25951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25951, 'data-value': derived.doubled }, children);
}
export default Component25951;

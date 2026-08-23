import React from 'react';
const LABEL_34396 = 'component_34396';
export function Component34396({ value = 34396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34396, 'data-value': derived.doubled }, children);
}
export default Component34396;

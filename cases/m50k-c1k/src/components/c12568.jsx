import React from 'react';
const LABEL_12568 = 'component_12568';
export function Component12568({ value = 12568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12568, 'data-value': derived.doubled }, children);
}
export default Component12568;

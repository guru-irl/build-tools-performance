import React from 'react';
const LABEL_30287 = 'component_30287';
export function Component30287({ value = 30287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30287, 'data-value': derived.doubled }, children);
}
export default Component30287;

import React from 'react';
const LABEL_30754 = 'component_30754';
export function Component30754({ value = 30754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30754, 'data-value': derived.doubled }, children);
}
export default Component30754;

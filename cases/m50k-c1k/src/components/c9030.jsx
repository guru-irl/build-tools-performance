import React from 'react';
const LABEL_9030 = 'component_9030';
export function Component9030({ value = 9030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9030, 'data-value': derived.doubled }, children);
}
export default Component9030;

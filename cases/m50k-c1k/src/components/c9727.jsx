import React from 'react';
const LABEL_9727 = 'component_9727';
export function Component9727({ value = 9727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9727, 'data-value': derived.doubled }, children);
}
export default Component9727;

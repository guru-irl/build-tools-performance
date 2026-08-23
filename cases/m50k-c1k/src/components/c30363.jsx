import React from 'react';
const LABEL_30363 = 'component_30363';
export function Component30363({ value = 30363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30363, 'data-value': derived.doubled }, children);
}
export default Component30363;

import React from 'react';
const LABEL_14113 = 'component_14113';
export function Component14113({ value = 14113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14113, 'data-value': derived.doubled }, children);
}
export default Component14113;

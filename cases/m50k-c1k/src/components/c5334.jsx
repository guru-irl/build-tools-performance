import React from 'react';
const LABEL_5334 = 'component_5334';
export function Component5334({ value = 5334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5334, 'data-value': derived.doubled }, children);
}
export default Component5334;

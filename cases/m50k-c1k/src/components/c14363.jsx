import React from 'react';
const LABEL_14363 = 'component_14363';
export function Component14363({ value = 14363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14363, 'data-value': derived.doubled }, children);
}
export default Component14363;

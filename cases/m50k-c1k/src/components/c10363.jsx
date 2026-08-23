import React from 'react';
const LABEL_10363 = 'component_10363';
export function Component10363({ value = 10363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10363, 'data-value': derived.doubled }, children);
}
export default Component10363;

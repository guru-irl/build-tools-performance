import React from 'react';
const LABEL_42363 = 'component_42363';
export function Component42363({ value = 42363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42363, 'data-value': derived.doubled }, children);
}
export default Component42363;

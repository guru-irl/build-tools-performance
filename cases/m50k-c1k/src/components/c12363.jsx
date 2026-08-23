import React from 'react';
const LABEL_12363 = 'component_12363';
export function Component12363({ value = 12363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12363, 'data-value': derived.doubled }, children);
}
export default Component12363;

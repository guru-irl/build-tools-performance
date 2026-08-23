import React from 'react';
const LABEL_22363 = 'component_22363';
export function Component22363({ value = 22363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22363, 'data-value': derived.doubled }, children);
}
export default Component22363;

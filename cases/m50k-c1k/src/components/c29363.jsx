import React from 'react';
const LABEL_29363 = 'component_29363';
export function Component29363({ value = 29363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29363, 'data-value': derived.doubled }, children);
}
export default Component29363;

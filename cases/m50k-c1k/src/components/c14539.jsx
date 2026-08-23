import React from 'react';
const LABEL_14539 = 'component_14539';
export function Component14539({ value = 14539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14539, 'data-value': derived.doubled }, children);
}
export default Component14539;

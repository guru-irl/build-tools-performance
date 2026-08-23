import React from 'react';
const LABEL_14630 = 'component_14630';
export function Component14630({ value = 14630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14630, 'data-value': derived.doubled }, children);
}
export default Component14630;

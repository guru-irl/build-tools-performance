import React from 'react';
const LABEL_22438 = 'component_22438';
export function Component22438({ value = 22438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22438, 'data-value': derived.doubled }, children);
}
export default Component22438;

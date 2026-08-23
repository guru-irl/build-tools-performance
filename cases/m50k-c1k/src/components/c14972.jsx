import React from 'react';
const LABEL_14972 = 'component_14972';
export function Component14972({ value = 14972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14972, 'data-value': derived.doubled }, children);
}
export default Component14972;

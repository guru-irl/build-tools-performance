import React from 'react';
const LABEL_42972 = 'component_42972';
export function Component42972({ value = 42972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42972, 'data-value': derived.doubled }, children);
}
export default Component42972;

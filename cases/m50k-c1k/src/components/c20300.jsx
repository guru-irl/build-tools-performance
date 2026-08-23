import React from 'react';
const LABEL_20300 = 'component_20300';
export function Component20300({ value = 20300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20300, 'data-value': derived.doubled }, children);
}
export default Component20300;

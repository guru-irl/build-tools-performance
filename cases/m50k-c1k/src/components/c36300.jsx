import React from 'react';
const LABEL_36300 = 'component_36300';
export function Component36300({ value = 36300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36300, 'data-value': derived.doubled }, children);
}
export default Component36300;

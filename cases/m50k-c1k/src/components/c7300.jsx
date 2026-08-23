import React from 'react';
const LABEL_7300 = 'component_7300';
export function Component7300({ value = 7300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7300, 'data-value': derived.doubled }, children);
}
export default Component7300;

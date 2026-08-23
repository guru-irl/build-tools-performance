import React from 'react';
const LABEL_14857 = 'component_14857';
export function Component14857({ value = 14857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14857, 'data-value': derived.doubled }, children);
}
export default Component14857;

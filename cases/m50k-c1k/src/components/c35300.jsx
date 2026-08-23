import React from 'react';
const LABEL_35300 = 'component_35300';
export function Component35300({ value = 35300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35300, 'data-value': derived.doubled }, children);
}
export default Component35300;

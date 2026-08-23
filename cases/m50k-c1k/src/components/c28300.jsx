import React from 'react';
const LABEL_28300 = 'component_28300';
export function Component28300({ value = 28300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28300, 'data-value': derived.doubled }, children);
}
export default Component28300;

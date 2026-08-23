import React from 'react';
const LABEL_26202 = 'component_26202';
export function Component26202({ value = 26202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26202, 'data-value': derived.doubled }, children);
}
export default Component26202;

import React from 'react';
const LABEL_42300 = 'component_42300';
export function Component42300({ value = 42300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42300, 'data-value': derived.doubled }, children);
}
export default Component42300;

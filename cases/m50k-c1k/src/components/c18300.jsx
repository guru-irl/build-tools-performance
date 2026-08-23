import React from 'react';
const LABEL_18300 = 'component_18300';
export function Component18300({ value = 18300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18300, 'data-value': derived.doubled }, children);
}
export default Component18300;

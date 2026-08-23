import React from 'react';
const LABEL_41904 = 'component_41904';
export function Component41904({ value = 41904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41904, 'data-value': derived.doubled }, children);
}
export default Component41904;

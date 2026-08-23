import React from 'react';
const LABEL_41471 = 'component_41471';
export function Component41471({ value = 41471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41471, 'data-value': derived.doubled }, children);
}
export default Component41471;

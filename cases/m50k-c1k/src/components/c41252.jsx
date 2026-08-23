import React from 'react';
const LABEL_41252 = 'component_41252';
export function Component41252({ value = 41252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41252, 'data-value': derived.doubled }, children);
}
export default Component41252;

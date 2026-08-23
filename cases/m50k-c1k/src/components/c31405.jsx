import React from 'react';
const LABEL_31405 = 'component_31405';
export function Component31405({ value = 31405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31405, 'data-value': derived.doubled }, children);
}
export default Component31405;

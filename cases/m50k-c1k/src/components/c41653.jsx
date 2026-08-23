import React from 'react';
const LABEL_41653 = 'component_41653';
export function Component41653({ value = 41653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41653, 'data-value': derived.doubled }, children);
}
export default Component41653;

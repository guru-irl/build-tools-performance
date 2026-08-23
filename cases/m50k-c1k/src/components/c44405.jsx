import React from 'react';
const LABEL_44405 = 'component_44405';
export function Component44405({ value = 44405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44405, 'data-value': derived.doubled }, children);
}
export default Component44405;

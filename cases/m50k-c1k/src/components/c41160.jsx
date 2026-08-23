import React from 'react';
const LABEL_41160 = 'component_41160';
export function Component41160({ value = 41160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41160, 'data-value': derived.doubled }, children);
}
export default Component41160;

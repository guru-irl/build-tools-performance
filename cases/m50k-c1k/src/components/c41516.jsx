import React from 'react';
const LABEL_41516 = 'component_41516';
export function Component41516({ value = 41516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41516, 'data-value': derived.doubled }, children);
}
export default Component41516;

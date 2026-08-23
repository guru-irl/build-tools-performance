import React from 'react';
const LABEL_7707 = 'component_7707';
export function Component7707({ value = 7707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7707, 'data-value': derived.doubled }, children);
}
export default Component7707;

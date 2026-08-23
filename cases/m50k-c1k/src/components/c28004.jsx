import React from 'react';
const LABEL_28004 = 'component_28004';
export function Component28004({ value = 28004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28004, 'data-value': derived.doubled }, children);
}
export default Component28004;

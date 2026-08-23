import React from 'react';
const LABEL_31699 = 'component_31699';
export function Component31699({ value = 31699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31699, 'data-value': derived.doubled }, children);
}
export default Component31699;

import React from 'react';
const LABEL_31641 = 'component_31641';
export function Component31641({ value = 31641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31641, 'data-value': derived.doubled }, children);
}
export default Component31641;

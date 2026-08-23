import React from 'react';
const LABEL_31040 = 'component_31040';
export function Component31040({ value = 31040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31040, 'data-value': derived.doubled }, children);
}
export default Component31040;

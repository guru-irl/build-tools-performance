import React from 'react';
const LABEL_5173 = 'component_5173';
export function Component5173({ value = 5173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5173, 'data-value': derived.doubled }, children);
}
export default Component5173;

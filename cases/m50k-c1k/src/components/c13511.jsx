import React from 'react';
const LABEL_13511 = 'component_13511';
export function Component13511({ value = 13511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13511, 'data-value': derived.doubled }, children);
}
export default Component13511;

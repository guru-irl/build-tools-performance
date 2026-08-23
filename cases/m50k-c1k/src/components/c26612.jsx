import React from 'react';
const LABEL_26612 = 'component_26612';
export function Component26612({ value = 26612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26612, 'data-value': derived.doubled }, children);
}
export default Component26612;

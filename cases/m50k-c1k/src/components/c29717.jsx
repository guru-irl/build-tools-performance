import React from 'react';
const LABEL_29717 = 'component_29717';
export function Component29717({ value = 29717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29717, 'data-value': derived.doubled }, children);
}
export default Component29717;

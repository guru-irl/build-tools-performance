import React from 'react';
const LABEL_26165 = 'component_26165';
export function Component26165({ value = 26165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26165, 'data-value': derived.doubled }, children);
}
export default Component26165;

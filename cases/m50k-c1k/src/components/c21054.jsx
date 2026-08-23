import React from 'react';
const LABEL_21054 = 'component_21054';
export function Component21054({ value = 21054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21054, 'data-value': derived.doubled }, children);
}
export default Component21054;

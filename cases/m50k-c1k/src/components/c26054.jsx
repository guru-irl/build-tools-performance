import React from 'react';
const LABEL_26054 = 'component_26054';
export function Component26054({ value = 26054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26054, 'data-value': derived.doubled }, children);
}
export default Component26054;

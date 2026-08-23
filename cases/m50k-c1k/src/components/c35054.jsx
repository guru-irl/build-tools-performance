import React from 'react';
const LABEL_35054 = 'component_35054';
export function Component35054({ value = 35054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35054, 'data-value': derived.doubled }, children);
}
export default Component35054;

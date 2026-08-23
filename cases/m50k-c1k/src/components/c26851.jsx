import React from 'react';
const LABEL_26851 = 'component_26851';
export function Component26851({ value = 26851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26851, 'data-value': derived.doubled }, children);
}
export default Component26851;

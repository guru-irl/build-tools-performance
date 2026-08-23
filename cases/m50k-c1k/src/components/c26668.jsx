import React from 'react';
const LABEL_26668 = 'component_26668';
export function Component26668({ value = 26668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26668, 'data-value': derived.doubled }, children);
}
export default Component26668;

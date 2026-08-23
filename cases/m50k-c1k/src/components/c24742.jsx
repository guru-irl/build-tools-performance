import React from 'react';
const LABEL_24742 = 'component_24742';
export function Component24742({ value = 24742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24742, 'data-value': derived.doubled }, children);
}
export default Component24742;

import React from 'react';
const LABEL_742 = 'component_742';
export function Component742({ value = 742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_742, 'data-value': derived.doubled }, children);
}
export default Component742;

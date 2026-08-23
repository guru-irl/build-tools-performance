import React from 'react';
const LABEL_8742 = 'component_8742';
export function Component8742({ value = 8742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8742, 'data-value': derived.doubled }, children);
}
export default Component8742;

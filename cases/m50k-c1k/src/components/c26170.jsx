import React from 'react';
const LABEL_26170 = 'component_26170';
export function Component26170({ value = 26170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26170, 'data-value': derived.doubled }, children);
}
export default Component26170;

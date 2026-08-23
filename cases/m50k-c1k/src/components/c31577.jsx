import React from 'react';
const LABEL_31577 = 'component_31577';
export function Component31577({ value = 31577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31577, 'data-value': derived.doubled }, children);
}
export default Component31577;

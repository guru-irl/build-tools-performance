import React from 'react';
const LABEL_14577 = 'component_14577';
export function Component14577({ value = 14577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14577, 'data-value': derived.doubled }, children);
}
export default Component14577;

import React from 'react';
const LABEL_42563 = 'component_42563';
export function Component42563({ value = 42563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42563, 'data-value': derived.doubled }, children);
}
export default Component42563;

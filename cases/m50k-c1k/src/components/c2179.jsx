import React from 'react';
const LABEL_2179 = 'component_2179';
export function Component2179({ value = 2179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2179, 'data-value': derived.doubled }, children);
}
export default Component2179;

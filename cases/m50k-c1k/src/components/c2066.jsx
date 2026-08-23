import React from 'react';
const LABEL_2066 = 'component_2066';
export function Component2066({ value = 2066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2066, 'data-value': derived.doubled }, children);
}
export default Component2066;

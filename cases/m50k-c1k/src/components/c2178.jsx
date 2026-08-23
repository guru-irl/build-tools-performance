import React from 'react';
const LABEL_2178 = 'component_2178';
export function Component2178({ value = 2178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2178, 'data-value': derived.doubled }, children);
}
export default Component2178;

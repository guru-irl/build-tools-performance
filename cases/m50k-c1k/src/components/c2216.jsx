import React from 'react';
const LABEL_2216 = 'component_2216';
export function Component2216({ value = 2216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2216, 'data-value': derived.doubled }, children);
}
export default Component2216;

import React from 'react';
const LABEL_2212 = 'component_2212';
export function Component2212({ value = 2212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2212, 'data-value': derived.doubled }, children);
}
export default Component2212;

import React from 'react';
const LABEL_2260 = 'component_2260';
export function Component2260({ value = 2260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2260, 'data-value': derived.doubled }, children);
}
export default Component2260;

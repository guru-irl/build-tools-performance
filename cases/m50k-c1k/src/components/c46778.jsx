import React from 'react';
const LABEL_46778 = 'component_46778';
export function Component46778({ value = 46778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46778, 'data-value': derived.doubled }, children);
}
export default Component46778;

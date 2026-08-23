import React from 'react';
const LABEL_5778 = 'component_5778';
export function Component5778({ value = 5778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5778, 'data-value': derived.doubled }, children);
}
export default Component5778;

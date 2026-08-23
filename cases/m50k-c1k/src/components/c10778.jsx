import React from 'react';
const LABEL_10778 = 'component_10778';
export function Component10778({ value = 10778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10778, 'data-value': derived.doubled }, children);
}
export default Component10778;

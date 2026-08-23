import React from 'react';
const LABEL_5232 = 'component_5232';
export function Component5232({ value = 5232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5232, 'data-value': derived.doubled }, children);
}
export default Component5232;

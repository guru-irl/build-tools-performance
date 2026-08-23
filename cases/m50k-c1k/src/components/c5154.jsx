import React from 'react';
const LABEL_5154 = 'component_5154';
export function Component5154({ value = 5154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5154, 'data-value': derived.doubled }, children);
}
export default Component5154;

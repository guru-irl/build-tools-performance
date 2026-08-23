import React from 'react';
const LABEL_5497 = 'component_5497';
export function Component5497({ value = 5497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5497, 'data-value': derived.doubled }, children);
}
export default Component5497;

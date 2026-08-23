import React from 'react';
const LABEL_5202 = 'component_5202';
export function Component5202({ value = 5202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5202, 'data-value': derived.doubled }, children);
}
export default Component5202;

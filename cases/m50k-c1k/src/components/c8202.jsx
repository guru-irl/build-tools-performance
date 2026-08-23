import React from 'react';
const LABEL_8202 = 'component_8202';
export function Component8202({ value = 8202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8202, 'data-value': derived.doubled }, children);
}
export default Component8202;

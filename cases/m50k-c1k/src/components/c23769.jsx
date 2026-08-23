import React from 'react';
const LABEL_23769 = 'component_23769';
export function Component23769({ value = 23769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23769, 'data-value': derived.doubled }, children);
}
export default Component23769;

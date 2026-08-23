import React from 'react';
const LABEL_42475 = 'component_42475';
export function Component42475({ value = 42475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42475, 'data-value': derived.doubled }, children);
}
export default Component42475;

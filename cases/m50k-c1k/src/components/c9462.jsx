import React from 'react';
const LABEL_9462 = 'component_9462';
export function Component9462({ value = 9462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9462, 'data-value': derived.doubled }, children);
}
export default Component9462;

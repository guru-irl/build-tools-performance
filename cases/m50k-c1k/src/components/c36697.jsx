import React from 'react';
const LABEL_36697 = 'component_36697';
export function Component36697({ value = 36697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36697, 'data-value': derived.doubled }, children);
}
export default Component36697;

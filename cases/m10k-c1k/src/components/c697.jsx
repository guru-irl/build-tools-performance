import React from 'react';
const LABEL_697 = 'component_697';
export function Component697({ value = 697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_697, 'data-value': derived.doubled }, children);
}
export default Component697;

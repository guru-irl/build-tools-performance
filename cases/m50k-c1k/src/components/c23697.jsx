import React from 'react';
const LABEL_23697 = 'component_23697';
export function Component23697({ value = 23697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23697, 'data-value': derived.doubled }, children);
}
export default Component23697;

import React from 'react';
const LABEL_35697 = 'component_35697';
export function Component35697({ value = 35697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35697, 'data-value': derived.doubled }, children);
}
export default Component35697;

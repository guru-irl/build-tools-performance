import React from 'react';
const LABEL_10697 = 'component_10697';
export function Component10697({ value = 10697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10697, 'data-value': derived.doubled }, children);
}
export default Component10697;

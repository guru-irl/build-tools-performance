import React from 'react';
const LABEL_3697 = 'component_3697';
export function Component3697({ value = 3697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3697, 'data-value': derived.doubled }, children);
}
export default Component3697;

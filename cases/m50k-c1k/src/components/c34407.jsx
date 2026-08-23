import React from 'react';
const LABEL_34407 = 'component_34407';
export function Component34407({ value = 34407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34407, 'data-value': derived.doubled }, children);
}
export default Component34407;

import React from 'react';
const LABEL_30407 = 'component_30407';
export function Component30407({ value = 30407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30407, 'data-value': derived.doubled }, children);
}
export default Component30407;

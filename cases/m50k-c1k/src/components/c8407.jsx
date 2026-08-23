import React from 'react';
const LABEL_8407 = 'component_8407';
export function Component8407({ value = 8407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8407, 'data-value': derived.doubled }, children);
}
export default Component8407;

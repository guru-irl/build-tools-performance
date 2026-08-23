import React from 'react';
const LABEL_1407 = 'component_1407';
export function Component1407({ value = 1407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1407, 'data-value': derived.doubled }, children);
}
export default Component1407;

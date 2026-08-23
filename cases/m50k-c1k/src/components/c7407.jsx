import React from 'react';
const LABEL_7407 = 'component_7407';
export function Component7407({ value = 7407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7407, 'data-value': derived.doubled }, children);
}
export default Component7407;

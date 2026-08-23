import React from 'react';
const LABEL_7359 = 'component_7359';
export function Component7359({ value = 7359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7359, 'data-value': derived.doubled }, children);
}
export default Component7359;

import React from 'react';
const LABEL_25359 = 'component_25359';
export function Component25359({ value = 25359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25359, 'data-value': derived.doubled }, children);
}
export default Component25359;

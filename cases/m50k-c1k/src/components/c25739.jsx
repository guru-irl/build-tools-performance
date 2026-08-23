import React from 'react';
const LABEL_25739 = 'component_25739';
export function Component25739({ value = 25739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25739, 'data-value': derived.doubled }, children);
}
export default Component25739;

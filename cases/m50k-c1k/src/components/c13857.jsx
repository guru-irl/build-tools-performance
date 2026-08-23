import React from 'react';
const LABEL_13857 = 'component_13857';
export function Component13857({ value = 13857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13857, 'data-value': derived.doubled }, children);
}
export default Component13857;

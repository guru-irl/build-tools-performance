import React from 'react';
const LABEL_21017 = 'component_21017';
export function Component21017({ value = 21017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21017, 'data-value': derived.doubled }, children);
}
export default Component21017;

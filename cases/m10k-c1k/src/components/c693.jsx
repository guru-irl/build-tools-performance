import React from 'react';
const LABEL_693 = 'component_693';
export function Component693({ value = 693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_693, 'data-value': derived.doubled }, children);
}
export default Component693;

import React from 'react';
const LABEL_12693 = 'component_12693';
export function Component12693({ value = 12693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12693, 'data-value': derived.doubled }, children);
}
export default Component12693;

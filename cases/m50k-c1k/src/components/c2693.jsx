import React from 'react';
const LABEL_2693 = 'component_2693';
export function Component2693({ value = 2693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2693, 'data-value': derived.doubled }, children);
}
export default Component2693;

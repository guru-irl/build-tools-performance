import React from 'react';
const LABEL_2703 = 'component_2703';
export function Component2703({ value = 2703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2703, 'data-value': derived.doubled }, children);
}
export default Component2703;

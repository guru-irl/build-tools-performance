import React from 'react';
const LABEL_2767 = 'component_2767';
export function Component2767({ value = 2767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2767, 'data-value': derived.doubled }, children);
}
export default Component2767;

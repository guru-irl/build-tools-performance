import React from 'react';
const LABEL_27144 = 'component_27144';
export function Component27144({ value = 27144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27144, 'data-value': derived.doubled }, children);
}
export default Component27144;

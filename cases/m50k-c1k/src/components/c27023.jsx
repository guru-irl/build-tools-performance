import React from 'react';
const LABEL_27023 = 'component_27023';
export function Component27023({ value = 27023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27023, 'data-value': derived.doubled }, children);
}
export default Component27023;

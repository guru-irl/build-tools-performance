import React from 'react';
const LABEL_27030 = 'component_27030';
export function Component27030({ value = 27030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27030, 'data-value': derived.doubled }, children);
}
export default Component27030;

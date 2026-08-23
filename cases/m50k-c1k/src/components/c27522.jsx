import React from 'react';
const LABEL_27522 = 'component_27522';
export function Component27522({ value = 27522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27522, 'data-value': derived.doubled }, children);
}
export default Component27522;

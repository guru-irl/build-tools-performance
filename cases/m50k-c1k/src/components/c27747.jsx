import React from 'react';
const LABEL_27747 = 'component_27747';
export function Component27747({ value = 27747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27747, 'data-value': derived.doubled }, children);
}
export default Component27747;

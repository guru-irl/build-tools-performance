import React from 'react';
const LABEL_45693 = 'component_45693';
export function Component45693({ value = 45693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45693, 'data-value': derived.doubled }, children);
}
export default Component45693;

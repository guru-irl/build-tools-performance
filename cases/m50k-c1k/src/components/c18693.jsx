import React from 'react';
const LABEL_18693 = 'component_18693';
export function Component18693({ value = 18693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18693, 'data-value': derived.doubled }, children);
}
export default Component18693;

import React from 'react';
const LABEL_33693 = 'component_33693';
export function Component33693({ value = 33693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33693, 'data-value': derived.doubled }, children);
}
export default Component33693;

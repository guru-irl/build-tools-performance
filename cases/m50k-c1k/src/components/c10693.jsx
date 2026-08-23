import React from 'react';
const LABEL_10693 = 'component_10693';
export function Component10693({ value = 10693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10693, 'data-value': derived.doubled }, children);
}
export default Component10693;

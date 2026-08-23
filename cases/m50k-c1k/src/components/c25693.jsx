import React from 'react';
const LABEL_25693 = 'component_25693';
export function Component25693({ value = 25693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25693, 'data-value': derived.doubled }, children);
}
export default Component25693;

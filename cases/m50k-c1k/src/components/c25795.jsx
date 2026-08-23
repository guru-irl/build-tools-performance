import React from 'react';
const LABEL_25795 = 'component_25795';
export function Component25795({ value = 25795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25795, 'data-value': derived.doubled }, children);
}
export default Component25795;

import React from 'react';
const LABEL_25047 = 'component_25047';
export function Component25047({ value = 25047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25047, 'data-value': derived.doubled }, children);
}
export default Component25047;

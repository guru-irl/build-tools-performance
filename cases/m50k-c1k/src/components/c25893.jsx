import React from 'react';
const LABEL_25893 = 'component_25893';
export function Component25893({ value = 25893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25893, 'data-value': derived.doubled }, children);
}
export default Component25893;

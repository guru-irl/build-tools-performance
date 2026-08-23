import React from 'react';
const LABEL_25660 = 'component_25660';
export function Component25660({ value = 25660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25660, 'data-value': derived.doubled }, children);
}
export default Component25660;

import React from 'react';
const LABEL_26660 = 'component_26660';
export function Component26660({ value = 26660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26660, 'data-value': derived.doubled }, children);
}
export default Component26660;

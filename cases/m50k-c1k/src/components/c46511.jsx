import React from 'react';
const LABEL_46511 = 'component_46511';
export function Component46511({ value = 46511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46511, 'data-value': derived.doubled }, children);
}
export default Component46511;

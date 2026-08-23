import React from 'react';
const LABEL_46696 = 'component_46696';
export function Component46696({ value = 46696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46696, 'data-value': derived.doubled }, children);
}
export default Component46696;

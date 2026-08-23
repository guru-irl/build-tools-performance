import React from 'react';
const LABEL_10124 = 'component_10124';
export function Component10124({ value = 10124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10124, 'data-value': derived.doubled }, children);
}
export default Component10124;

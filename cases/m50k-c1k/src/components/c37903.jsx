import React from 'react';
const LABEL_37903 = 'component_37903';
export function Component37903({ value = 37903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37903, 'data-value': derived.doubled }, children);
}
export default Component37903;

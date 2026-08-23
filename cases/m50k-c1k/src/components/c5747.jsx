import React from 'react';
const LABEL_5747 = 'component_5747';
export function Component5747({ value = 5747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5747, 'data-value': derived.doubled }, children);
}
export default Component5747;

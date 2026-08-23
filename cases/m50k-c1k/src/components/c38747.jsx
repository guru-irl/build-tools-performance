import React from 'react';
const LABEL_38747 = 'component_38747';
export function Component38747({ value = 38747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38747, 'data-value': derived.doubled }, children);
}
export default Component38747;

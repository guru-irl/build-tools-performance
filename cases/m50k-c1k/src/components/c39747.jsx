import React from 'react';
const LABEL_39747 = 'component_39747';
export function Component39747({ value = 39747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39747, 'data-value': derived.doubled }, children);
}
export default Component39747;

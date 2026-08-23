import React from 'react';
const LABEL_26747 = 'component_26747';
export function Component26747({ value = 26747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26747, 'data-value': derived.doubled }, children);
}
export default Component26747;

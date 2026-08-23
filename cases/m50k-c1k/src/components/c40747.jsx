import React from 'react';
const LABEL_40747 = 'component_40747';
export function Component40747({ value = 40747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40747, 'data-value': derived.doubled }, children);
}
export default Component40747;

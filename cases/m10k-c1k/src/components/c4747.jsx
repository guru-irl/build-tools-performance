import React from 'react';
const LABEL_4747 = 'component_4747';
export function Component4747({ value = 4747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4747, 'data-value': derived.doubled }, children);
}
export default Component4747;

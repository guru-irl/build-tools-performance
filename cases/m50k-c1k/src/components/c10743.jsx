import React from 'react';
const LABEL_10743 = 'component_10743';
export function Component10743({ value = 10743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10743, 'data-value': derived.doubled }, children);
}
export default Component10743;

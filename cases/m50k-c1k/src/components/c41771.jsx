import React from 'react';
const LABEL_41771 = 'component_41771';
export function Component41771({ value = 41771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41771, 'data-value': derived.doubled }, children);
}
export default Component41771;

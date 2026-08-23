import React from 'react';
const LABEL_15854 = 'component_15854';
export function Component15854({ value = 15854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15854, 'data-value': derived.doubled }, children);
}
export default Component15854;

import React from 'react';
const LABEL_15724 = 'component_15724';
export function Component15724({ value = 15724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15724, 'data-value': derived.doubled }, children);
}
export default Component15724;

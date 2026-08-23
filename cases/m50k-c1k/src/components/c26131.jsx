import React from 'react';
const LABEL_26131 = 'component_26131';
export function Component26131({ value = 26131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26131, 'data-value': derived.doubled }, children);
}
export default Component26131;

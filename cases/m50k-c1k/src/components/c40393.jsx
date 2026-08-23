import React from 'react';
const LABEL_40393 = 'component_40393';
export function Component40393({ value = 40393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40393, 'data-value': derived.doubled }, children);
}
export default Component40393;

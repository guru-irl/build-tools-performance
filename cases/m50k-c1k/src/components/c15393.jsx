import React from 'react';
const LABEL_15393 = 'component_15393';
export function Component15393({ value = 15393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15393, 'data-value': derived.doubled }, children);
}
export default Component15393;

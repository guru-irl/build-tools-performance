import React from 'react';
const LABEL_28514 = 'component_28514';
export function Component28514({ value = 28514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28514, 'data-value': derived.doubled }, children);
}
export default Component28514;

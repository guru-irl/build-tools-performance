import React from 'react';
const LABEL_28131 = 'component_28131';
export function Component28131({ value = 28131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28131, 'data-value': derived.doubled }, children);
}
export default Component28131;

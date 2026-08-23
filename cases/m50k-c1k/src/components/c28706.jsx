import React from 'react';
const LABEL_28706 = 'component_28706';
export function Component28706({ value = 28706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28706, 'data-value': derived.doubled }, children);
}
export default Component28706;

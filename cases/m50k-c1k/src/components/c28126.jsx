import React from 'react';
const LABEL_28126 = 'component_28126';
export function Component28126({ value = 28126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28126, 'data-value': derived.doubled }, children);
}
export default Component28126;

import React from 'react';
const LABEL_17299 = 'component_17299';
export function Component17299({ value = 17299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17299, 'data-value': derived.doubled }, children);
}
export default Component17299;

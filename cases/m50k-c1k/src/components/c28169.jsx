import React from 'react';
const LABEL_28169 = 'component_28169';
export function Component28169({ value = 28169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28169, 'data-value': derived.doubled }, children);
}
export default Component28169;

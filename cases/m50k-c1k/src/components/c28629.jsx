import React from 'react';
const LABEL_28629 = 'component_28629';
export function Component28629({ value = 28629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28629, 'data-value': derived.doubled }, children);
}
export default Component28629;

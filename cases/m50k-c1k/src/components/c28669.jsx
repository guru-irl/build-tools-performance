import React from 'react';
const LABEL_28669 = 'component_28669';
export function Component28669({ value = 28669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28669, 'data-value': derived.doubled }, children);
}
export default Component28669;

import React from 'react';
const LABEL_7669 = 'component_7669';
export function Component7669({ value = 7669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7669, 'data-value': derived.doubled }, children);
}
export default Component7669;

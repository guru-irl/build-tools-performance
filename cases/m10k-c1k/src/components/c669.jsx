import React from 'react';
const LABEL_669 = 'component_669';
export function Component669({ value = 669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_669, 'data-value': derived.doubled }, children);
}
export default Component669;

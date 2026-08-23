import React from 'react';
const LABEL_30720 = 'component_30720';
export function Component30720({ value = 30720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30720, 'data-value': derived.doubled }, children);
}
export default Component30720;

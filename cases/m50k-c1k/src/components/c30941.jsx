import React from 'react';
const LABEL_30941 = 'component_30941';
export function Component30941({ value = 30941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30941, 'data-value': derived.doubled }, children);
}
export default Component30941;

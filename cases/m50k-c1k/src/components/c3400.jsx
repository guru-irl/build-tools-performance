import React from 'react';
const LABEL_3400 = 'component_3400';
export function Component3400({ value = 3400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3400, 'data-value': derived.doubled }, children);
}
export default Component3400;

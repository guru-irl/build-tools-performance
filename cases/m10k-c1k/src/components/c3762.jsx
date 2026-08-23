import React from 'react';
const LABEL_3762 = 'component_3762';
export function Component3762({ value = 3762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3762, 'data-value': derived.doubled }, children);
}
export default Component3762;

import React from 'react';
const LABEL_3999 = 'component_3999';
export function Component3999({ value = 3999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3999, 'data-value': derived.doubled }, children);
}
export default Component3999;

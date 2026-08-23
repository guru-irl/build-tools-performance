import React from 'react';
const LABEL_3191 = 'component_3191';
export function Component3191({ value = 3191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3191, 'data-value': derived.doubled }, children);
}
export default Component3191;

import React from 'react';
const LABEL_39804 = 'component_39804';
export function Component39804({ value = 39804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39804, 'data-value': derived.doubled }, children);
}
export default Component39804;

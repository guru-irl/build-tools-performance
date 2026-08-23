import React from 'react';
const LABEL_39561 = 'component_39561';
export function Component39561({ value = 39561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39561, 'data-value': derived.doubled }, children);
}
export default Component39561;

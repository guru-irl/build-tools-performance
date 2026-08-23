import React from 'react';
const LABEL_39740 = 'component_39740';
export function Component39740({ value = 39740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39740, 'data-value': derived.doubled }, children);
}
export default Component39740;

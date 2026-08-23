import React from 'react';
const LABEL_39328 = 'component_39328';
export function Component39328({ value = 39328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39328, 'data-value': derived.doubled }, children);
}
export default Component39328;

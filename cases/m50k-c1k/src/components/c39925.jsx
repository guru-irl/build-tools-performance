import React from 'react';
const LABEL_39925 = 'component_39925';
export function Component39925({ value = 39925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39925, 'data-value': derived.doubled }, children);
}
export default Component39925;

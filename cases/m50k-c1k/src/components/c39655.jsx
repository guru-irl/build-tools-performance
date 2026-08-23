import React from 'react';
const LABEL_39655 = 'component_39655';
export function Component39655({ value = 39655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39655, 'data-value': derived.doubled }, children);
}
export default Component39655;

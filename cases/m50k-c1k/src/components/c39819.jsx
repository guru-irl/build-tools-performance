import React from 'react';
const LABEL_39819 = 'component_39819';
export function Component39819({ value = 39819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39819, 'data-value': derived.doubled }, children);
}
export default Component39819;

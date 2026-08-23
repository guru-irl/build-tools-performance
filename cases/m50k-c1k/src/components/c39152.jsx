import React from 'react';
const LABEL_39152 = 'component_39152';
export function Component39152({ value = 39152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39152, 'data-value': derived.doubled }, children);
}
export default Component39152;

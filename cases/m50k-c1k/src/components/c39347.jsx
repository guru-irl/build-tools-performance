import React from 'react';
const LABEL_39347 = 'component_39347';
export function Component39347({ value = 39347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39347, 'data-value': derived.doubled }, children);
}
export default Component39347;

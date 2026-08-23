import React from 'react';
const LABEL_39949 = 'component_39949';
export function Component39949({ value = 39949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39949, 'data-value': derived.doubled }, children);
}
export default Component39949;

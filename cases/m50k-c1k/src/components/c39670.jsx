import React from 'react';
const LABEL_39670 = 'component_39670';
export function Component39670({ value = 39670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39670, 'data-value': derived.doubled }, children);
}
export default Component39670;

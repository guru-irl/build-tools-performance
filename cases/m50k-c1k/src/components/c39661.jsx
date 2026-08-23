import React from 'react';
const LABEL_39661 = 'component_39661';
export function Component39661({ value = 39661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39661, 'data-value': derived.doubled }, children);
}
export default Component39661;

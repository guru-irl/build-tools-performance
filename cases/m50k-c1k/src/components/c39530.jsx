import React from 'react';
const LABEL_39530 = 'component_39530';
export function Component39530({ value = 39530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39530, 'data-value': derived.doubled }, children);
}
export default Component39530;

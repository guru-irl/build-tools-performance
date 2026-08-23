import React from 'react';
const LABEL_11381 = 'component_11381';
export function Component11381({ value = 11381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11381, 'data-value': derived.doubled }, children);
}
export default Component11381;

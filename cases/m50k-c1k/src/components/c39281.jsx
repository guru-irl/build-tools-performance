import React from 'react';
const LABEL_39281 = 'component_39281';
export function Component39281({ value = 39281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39281, 'data-value': derived.doubled }, children);
}
export default Component39281;

import React from 'react';
const LABEL_39751 = 'component_39751';
export function Component39751({ value = 39751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39751, 'data-value': derived.doubled }, children);
}
export default Component39751;

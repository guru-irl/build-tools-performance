import React from 'react';
const LABEL_39645 = 'component_39645';
export function Component39645({ value = 39645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39645, 'data-value': derived.doubled }, children);
}
export default Component39645;

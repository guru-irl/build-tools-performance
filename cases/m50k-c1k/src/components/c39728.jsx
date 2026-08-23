import React from 'react';
const LABEL_39728 = 'component_39728';
export function Component39728({ value = 39728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39728, 'data-value': derived.doubled }, children);
}
export default Component39728;

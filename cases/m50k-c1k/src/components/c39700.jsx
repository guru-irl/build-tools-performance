import React from 'react';
const LABEL_39700 = 'component_39700';
export function Component39700({ value = 39700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39700, 'data-value': derived.doubled }, children);
}
export default Component39700;

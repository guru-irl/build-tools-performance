import React from 'react';
const LABEL_39615 = 'component_39615';
export function Component39615({ value = 39615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39615, 'data-value': derived.doubled }, children);
}
export default Component39615;

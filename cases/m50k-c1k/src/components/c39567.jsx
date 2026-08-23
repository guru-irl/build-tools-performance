import React from 'react';
const LABEL_39567 = 'component_39567';
export function Component39567({ value = 39567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39567, 'data-value': derived.doubled }, children);
}
export default Component39567;

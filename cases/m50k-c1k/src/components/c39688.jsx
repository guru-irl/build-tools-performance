import React from 'react';
const LABEL_39688 = 'component_39688';
export function Component39688({ value = 39688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39688, 'data-value': derived.doubled }, children);
}
export default Component39688;

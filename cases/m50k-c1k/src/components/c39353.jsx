import React from 'react';
const LABEL_39353 = 'component_39353';
export function Component39353({ value = 39353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39353, 'data-value': derived.doubled }, children);
}
export default Component39353;

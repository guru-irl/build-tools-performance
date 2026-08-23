import React from 'react';
const LABEL_39026 = 'component_39026';
export function Component39026({ value = 39026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39026, 'data-value': derived.doubled }, children);
}
export default Component39026;

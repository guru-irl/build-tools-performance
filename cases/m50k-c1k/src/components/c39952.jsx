import React from 'react';
const LABEL_39952 = 'component_39952';
export function Component39952({ value = 39952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39952, 'data-value': derived.doubled }, children);
}
export default Component39952;

import React from 'react';
const LABEL_39892 = 'component_39892';
export function Component39892({ value = 39892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39892, 'data-value': derived.doubled }, children);
}
export default Component39892;

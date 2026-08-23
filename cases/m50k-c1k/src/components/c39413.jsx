import React from 'react';
const LABEL_39413 = 'component_39413';
export function Component39413({ value = 39413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39413, 'data-value': derived.doubled }, children);
}
export default Component39413;

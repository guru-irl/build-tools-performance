import React from 'react';
const LABEL_46862 = 'component_46862';
export function Component46862({ value = 46862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46862, 'data-value': derived.doubled }, children);
}
export default Component46862;

import React from 'react';
const LABEL_35862 = 'component_35862';
export function Component35862({ value = 35862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35862, 'data-value': derived.doubled }, children);
}
export default Component35862;

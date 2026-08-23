import React from 'react';
const LABEL_39212 = 'component_39212';
export function Component39212({ value = 39212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39212, 'data-value': derived.doubled }, children);
}
export default Component39212;

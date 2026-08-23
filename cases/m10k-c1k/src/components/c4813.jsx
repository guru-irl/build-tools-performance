import React from 'react';
const LABEL_4813 = 'component_4813';
export function Component4813({ value = 4813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4813, 'data-value': derived.doubled }, children);
}
export default Component4813;

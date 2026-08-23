import React from 'react';
const LABEL_30299 = 'component_30299';
export function Component30299({ value = 30299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30299, 'data-value': derived.doubled }, children);
}
export default Component30299;

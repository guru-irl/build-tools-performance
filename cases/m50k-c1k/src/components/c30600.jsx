import React from 'react';
const LABEL_30600 = 'component_30600';
export function Component30600({ value = 30600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30600, 'data-value': derived.doubled }, children);
}
export default Component30600;

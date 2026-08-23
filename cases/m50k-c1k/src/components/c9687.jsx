import React from 'react';
const LABEL_9687 = 'component_9687';
export function Component9687({ value = 9687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9687, 'data-value': derived.doubled }, children);
}
export default Component9687;

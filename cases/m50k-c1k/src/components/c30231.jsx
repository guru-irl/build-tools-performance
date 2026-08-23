import React from 'react';
const LABEL_30231 = 'component_30231';
export function Component30231({ value = 30231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30231, 'data-value': derived.doubled }, children);
}
export default Component30231;

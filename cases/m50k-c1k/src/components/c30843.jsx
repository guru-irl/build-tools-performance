import React from 'react';
const LABEL_30843 = 'component_30843';
export function Component30843({ value = 30843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30843, 'data-value': derived.doubled }, children);
}
export default Component30843;

import React from 'react';
const LABEL_30991 = 'component_30991';
export function Component30991({ value = 30991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30991, 'data-value': derived.doubled }, children);
}
export default Component30991;

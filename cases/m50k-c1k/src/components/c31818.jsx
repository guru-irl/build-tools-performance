import React from 'react';
const LABEL_31818 = 'component_31818';
export function Component31818({ value = 31818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31818, 'data-value': derived.doubled }, children);
}
export default Component31818;

import React from 'react';
const LABEL_31332 = 'component_31332';
export function Component31332({ value = 31332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31332, 'data-value': derived.doubled }, children);
}
export default Component31332;

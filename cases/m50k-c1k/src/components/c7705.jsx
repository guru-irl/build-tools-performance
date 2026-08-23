import React from 'react';
const LABEL_7705 = 'component_7705';
export function Component7705({ value = 7705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7705, 'data-value': derived.doubled }, children);
}
export default Component7705;

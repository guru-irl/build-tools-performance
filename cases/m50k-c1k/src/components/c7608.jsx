import React from 'react';
const LABEL_7608 = 'component_7608';
export function Component7608({ value = 7608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7608, 'data-value': derived.doubled }, children);
}
export default Component7608;

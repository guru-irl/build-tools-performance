import React from 'react';
const LABEL_5705 = 'component_5705';
export function Component5705({ value = 5705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5705, 'data-value': derived.doubled }, children);
}
export default Component5705;

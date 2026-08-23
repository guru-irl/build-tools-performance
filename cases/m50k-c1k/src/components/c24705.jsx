import React from 'react';
const LABEL_24705 = 'component_24705';
export function Component24705({ value = 24705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24705, 'data-value': derived.doubled }, children);
}
export default Component24705;

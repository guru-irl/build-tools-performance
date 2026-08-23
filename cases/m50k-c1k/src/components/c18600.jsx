import React from 'react';
const LABEL_18600 = 'component_18600';
export function Component18600({ value = 18600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18600, 'data-value': derived.doubled }, children);
}
export default Component18600;

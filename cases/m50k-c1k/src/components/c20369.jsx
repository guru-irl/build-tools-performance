import React from 'react';
const LABEL_20369 = 'component_20369';
export function Component20369({ value = 20369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20369, 'data-value': derived.doubled }, children);
}
export default Component20369;

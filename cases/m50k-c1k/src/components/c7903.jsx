import React from 'react';
const LABEL_7903 = 'component_7903';
export function Component7903({ value = 7903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7903, 'data-value': derived.doubled }, children);
}
export default Component7903;

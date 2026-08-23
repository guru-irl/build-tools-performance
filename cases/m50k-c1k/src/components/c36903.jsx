import React from 'react';
const LABEL_36903 = 'component_36903';
export function Component36903({ value = 36903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36903, 'data-value': derived.doubled }, children);
}
export default Component36903;

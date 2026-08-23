import React from 'react';
const LABEL_20908 = 'component_20908';
export function Component20908({ value = 20908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20908, 'data-value': derived.doubled }, children);
}
export default Component20908;

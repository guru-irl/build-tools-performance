import React from 'react';
const LABEL_26088 = 'component_26088';
export function Component26088({ value = 26088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26088, 'data-value': derived.doubled }, children);
}
export default Component26088;

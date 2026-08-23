import React from 'react';
const LABEL_33088 = 'component_33088';
export function Component33088({ value = 33088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33088, 'data-value': derived.doubled }, children);
}
export default Component33088;

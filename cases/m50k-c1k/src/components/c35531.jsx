import React from 'react';
const LABEL_35531 = 'component_35531';
export function Component35531({ value = 35531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35531, 'data-value': derived.doubled }, children);
}
export default Component35531;

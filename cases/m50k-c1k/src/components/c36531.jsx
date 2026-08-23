import React from 'react';
const LABEL_36531 = 'component_36531';
export function Component36531({ value = 36531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36531, 'data-value': derived.doubled }, children);
}
export default Component36531;

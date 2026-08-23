import React from 'react';
const LABEL_24387 = 'component_24387';
export function Component24387({ value = 24387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24387, 'data-value': derived.doubled }, children);
}
export default Component24387;

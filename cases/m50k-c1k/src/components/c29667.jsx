import React from 'react';
const LABEL_29667 = 'component_29667';
export function Component29667({ value = 29667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29667, 'data-value': derived.doubled }, children);
}
export default Component29667;

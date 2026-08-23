import React from 'react';
const LABEL_13077 = 'component_13077';
export function Component13077({ value = 13077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13077, 'data-value': derived.doubled }, children);
}
export default Component13077;

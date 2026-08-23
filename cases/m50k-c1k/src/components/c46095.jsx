import React from 'react';
const LABEL_46095 = 'component_46095';
export function Component46095({ value = 46095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46095, 'data-value': derived.doubled }, children);
}
export default Component46095;

import React from 'react';
const LABEL_14018 = 'component_14018';
export function Component14018({ value = 14018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14018, 'data-value': derived.doubled }, children);
}
export default Component14018;

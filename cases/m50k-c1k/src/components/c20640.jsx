import React from 'react';
const LABEL_20640 = 'component_20640';
export function Component20640({ value = 20640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20640, 'data-value': derived.doubled }, children);
}
export default Component20640;

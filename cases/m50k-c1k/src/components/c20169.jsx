import React from 'react';
const LABEL_20169 = 'component_20169';
export function Component20169({ value = 20169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20169, 'data-value': derived.doubled }, children);
}
export default Component20169;

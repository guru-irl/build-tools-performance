import React from 'react';
const LABEL_13169 = 'component_13169';
export function Component13169({ value = 13169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13169, 'data-value': derived.doubled }, children);
}
export default Component13169;

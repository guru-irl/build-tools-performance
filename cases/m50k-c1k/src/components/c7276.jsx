import React from 'react';
const LABEL_7276 = 'component_7276';
export function Component7276({ value = 7276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7276, 'data-value': derived.doubled }, children);
}
export default Component7276;

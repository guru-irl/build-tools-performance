import React from 'react';
const LABEL_33418 = 'component_33418';
export function Component33418({ value = 33418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33418, 'data-value': derived.doubled }, children);
}
export default Component33418;

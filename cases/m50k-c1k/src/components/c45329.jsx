import React from 'react';
const LABEL_45329 = 'component_45329';
export function Component45329({ value = 45329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45329, 'data-value': derived.doubled }, children);
}
export default Component45329;

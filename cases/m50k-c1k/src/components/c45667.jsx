import React from 'react';
const LABEL_45667 = 'component_45667';
export function Component45667({ value = 45667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45667, 'data-value': derived.doubled }, children);
}
export default Component45667;

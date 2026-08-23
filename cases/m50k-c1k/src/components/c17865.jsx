import React from 'react';
const LABEL_17865 = 'component_17865';
export function Component17865({ value = 17865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17865, 'data-value': derived.doubled }, children);
}
export default Component17865;

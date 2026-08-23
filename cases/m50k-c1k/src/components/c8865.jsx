import React from 'react';
const LABEL_8865 = 'component_8865';
export function Component8865({ value = 8865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8865, 'data-value': derived.doubled }, children);
}
export default Component8865;

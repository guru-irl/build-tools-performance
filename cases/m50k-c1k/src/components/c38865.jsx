import React from 'react';
const LABEL_38865 = 'component_38865';
export function Component38865({ value = 38865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38865, 'data-value': derived.doubled }, children);
}
export default Component38865;

import React from 'react';
const LABEL_35865 = 'component_35865';
export function Component35865({ value = 35865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35865, 'data-value': derived.doubled }, children);
}
export default Component35865;

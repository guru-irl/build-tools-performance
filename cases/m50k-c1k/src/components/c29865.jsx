import React from 'react';
const LABEL_29865 = 'component_29865';
export function Component29865({ value = 29865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29865, 'data-value': derived.doubled }, children);
}
export default Component29865;

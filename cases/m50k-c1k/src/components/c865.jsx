import React from 'react';
const LABEL_865 = 'component_865';
export function Component865({ value = 865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_865, 'data-value': derived.doubled }, children);
}
export default Component865;

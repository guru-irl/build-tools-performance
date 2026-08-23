import React from 'react';
const LABEL_24865 = 'component_24865';
export function Component24865({ value = 24865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24865, 'data-value': derived.doubled }, children);
}
export default Component24865;

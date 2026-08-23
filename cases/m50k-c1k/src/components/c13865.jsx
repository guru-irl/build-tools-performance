import React from 'react';
const LABEL_13865 = 'component_13865';
export function Component13865({ value = 13865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13865, 'data-value': derived.doubled }, children);
}
export default Component13865;

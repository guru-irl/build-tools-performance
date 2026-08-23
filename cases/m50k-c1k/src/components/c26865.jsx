import React from 'react';
const LABEL_26865 = 'component_26865';
export function Component26865({ value = 26865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26865, 'data-value': derived.doubled }, children);
}
export default Component26865;

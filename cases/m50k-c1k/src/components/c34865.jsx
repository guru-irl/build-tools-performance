import React from 'react';
const LABEL_34865 = 'component_34865';
export function Component34865({ value = 34865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34865, 'data-value': derived.doubled }, children);
}
export default Component34865;

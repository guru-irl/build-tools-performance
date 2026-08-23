import React from 'react';
const LABEL_41865 = 'component_41865';
export function Component41865({ value = 41865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41865, 'data-value': derived.doubled }, children);
}
export default Component41865;

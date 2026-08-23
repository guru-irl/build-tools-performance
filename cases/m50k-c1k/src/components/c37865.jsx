import React from 'react';
const LABEL_37865 = 'component_37865';
export function Component37865({ value = 37865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37865, 'data-value': derived.doubled }, children);
}
export default Component37865;

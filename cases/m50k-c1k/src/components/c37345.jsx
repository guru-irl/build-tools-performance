import React from 'react';
const LABEL_37345 = 'component_37345';
export function Component37345({ value = 37345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37345, 'data-value': derived.doubled }, children);
}
export default Component37345;

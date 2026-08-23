import React from 'react';
const LABEL_46077 = 'component_46077';
export function Component46077({ value = 46077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46077, 'data-value': derived.doubled }, children);
}
export default Component46077;

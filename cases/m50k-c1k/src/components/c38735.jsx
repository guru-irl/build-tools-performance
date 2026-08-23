import React from 'react';
const LABEL_38735 = 'component_38735';
export function Component38735({ value = 38735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38735, 'data-value': derived.doubled }, children);
}
export default Component38735;

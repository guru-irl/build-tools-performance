import React from 'react';
const LABEL_38043 = 'component_38043';
export function Component38043({ value = 38043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38043, 'data-value': derived.doubled }, children);
}
export default Component38043;

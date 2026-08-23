import React from 'react';
const LABEL_38388 = 'component_38388';
export function Component38388({ value = 38388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38388, 'data-value': derived.doubled }, children);
}
export default Component38388;

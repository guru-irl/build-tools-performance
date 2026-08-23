import React from 'react';
const LABEL_38980 = 'component_38980';
export function Component38980({ value = 38980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38980, 'data-value': derived.doubled }, children);
}
export default Component38980;

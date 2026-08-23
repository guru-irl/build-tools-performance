import React from 'react';
const LABEL_8980 = 'component_8980';
export function Component8980({ value = 8980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8980, 'data-value': derived.doubled }, children);
}
export default Component8980;

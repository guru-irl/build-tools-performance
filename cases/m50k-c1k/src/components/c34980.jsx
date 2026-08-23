import React from 'react';
const LABEL_34980 = 'component_34980';
export function Component34980({ value = 34980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34980, 'data-value': derived.doubled }, children);
}
export default Component34980;

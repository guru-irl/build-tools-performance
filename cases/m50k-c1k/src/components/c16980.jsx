import React from 'react';
const LABEL_16980 = 'component_16980';
export function Component16980({ value = 16980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16980, 'data-value': derived.doubled }, children);
}
export default Component16980;

import React from 'react';
const LABEL_17457 = 'component_17457';
export function Component17457({ value = 17457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17457, 'data-value': derived.doubled }, children);
}
export default Component17457;

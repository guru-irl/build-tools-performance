import React from 'react';
const LABEL_17260 = 'component_17260';
export function Component17260({ value = 17260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17260, 'data-value': derived.doubled }, children);
}
export default Component17260;
